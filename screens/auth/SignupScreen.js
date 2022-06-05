import React, { useState } from 'react'
import { Input, Box, Text, Spinner, FormControl, HStack, Center, Heading, Button, Icon } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons"
import axios from 'axios';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { insertUserData } from '../../store/actions/user-info'
import { useDispatch, useSelector } from 'react-redux'
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import showToast from '../../functions/showToast'

const SignupScreen = (props) => {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const signupHandler = async (values, setSubmitting, setErrors) => {
    const data = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      phone_number: values.phone_number,
      password: values.password,
      password_confirmation: values.password_confirmation,
    }
    try {
      const res = await axios.post('http://192.168.43.101:8000/api/register',
        data,
        {
          headers: {
            "Accept": "application/json",
          },
          timeout: 5000
        }
      )
      const resData = res.data
      if (resData.success == false) {
        showToast('default',resData.message,'70%')
      } else if (resData.success == true){
        showToast('default',resData.message,'70%')
        props.navigation.navigate('Login', {
          email: values.email,
          password: values.password,
        })
      }
    } catch (e) {
      console.log(e)
      if (e.code == 'ECONNABORTED') {
        showToast('default', 'Timeout. Try again.', '60%')
      }
      if (e?.response?.data) {
        const errorData = e.response.data
        setErrors(errorData.errors);
        showToast('default', errorData.message, '60%')
      }
    }
    setSubmitting(false);
  }

  return (
    <KeyboardAvoidingWrapper>
      <Center bgColor='white' flex={1} justifyContent='center' alignContent='center' py='10' px='2%'>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            email: '',
            phone_number: '',
            password: '',
            password_confirmation: '',
          }}
          validationSchema={Yup.object({
            first_name: Yup.string().required('Enter your first name'),
            last_name: Yup.string().required('Eenter your last name!'),
            email: Yup.string().email('Invalid email address').required('Email cannot be empty!'),
            phone_number: Yup.string().required('Phone number cannot be empty!'),
            password: Yup.string()
              .max(30, 'Must be 30 characters or less')
              .min(8, "Must be at least eight characters")
              .required('Password cannot be empty'),
            password_confirmation: Yup.string()
              .max(30, 'Must be 30 characters or less')
              .required('Password cannot be empty')
              .test('passwords-match', 'Passwords must match', function (value) {
                return this.parent.password === value;
              }),
          })}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            signupHandler(values, setSubmitting, setErrors);
          }}
        >
          {({
            errors, touched, isSubmitting, setErrors, handleChange, handleBlur, handleSubmit, values
          }) => (
            <Box flex={1} justifyContent='center' alignContent='center'>
              <Heading textAlign='left'>SignUp</Heading>
              <Text color='blueGray.400' textAlign='left'>Create a new account</Text>
              <FormControl
                isInvalid={errors.first_name && touched.first_name}
                w={{
                  base: "80",
                  md: "80",
                }}>
                <Input
                  onChangeText={handleChange('first_name')}
                  onBlur={handleBlur('first_name')}
                  value={values.first_name}
                  isDisabled={isSubmitting}
                  my="2" placeholder="First Name" fontSize={15}
                />
                <FormControl.ErrorMessage>{errors.first_name}</FormControl.ErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.last_name && touched.last_name}
                w={{
                  base: "80",
                  md: "80",
                }}>
                <Input my="2" placeholder="Last Name" fontSize={15}
                  onChangeText={handleChange('last_name')}
                  onBlur={handleBlur('last_name')}
                  value={values.last_name}
                  isDisabled={isSubmitting}
                />
                <FormControl.ErrorMessage>{errors.last_name}</FormControl.ErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.email && touched.email}
                w={{
                  base: "80",
                  md: "80",
                }}>
                <Input my="2" placeholder="Email" fontSize={15}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  isDisabled={isSubmitting}
                />
                <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.phone_number && touched.phone_number}
                w={{
                  base: "80",
                  md: "80",
                }}>
                <Input my="2" placeholder="Phone Number" fontSize={15}
                  onChangeText={handleChange('phone_number')}
                  keyboardType='phone-pad'
                  onBlur={handleBlur('phone_number')}
                  value={values.phone_number}
                  isDisabled={isSubmitting}
                />
                <FormControl.ErrorMessage>{errors.phone_number}</FormControl.ErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.password && touched.password}
                w={{
                  base: "80",
                  md: "80",
                }}>
                <Input my="2" fontSize={15}
                  type={show ? "text" : "password"}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  isDisabled={isSubmitting}
                  InputRightElement={
                    <Icon
                      as={show ? <MaterialIcons name="visibility" /> : <MaterialIcons name="visibility-off" />}
                      size={5} mr="2" color="muted.400"
                      onPress={handleClick}
                    />
                  }
                  placeholder="Password"
                />
                <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
              </FormControl>

              <FormControl
                isInvalid={errors.password_confirmation && touched.password_confirmation}
                w={{
                  base: "80",
                  md: "80",
                }}>
                <Input my="2" fontSize={15}
                  type={show ? "text" : "password"}
                  onChangeText={handleChange('password_confirmation')}
                  onBlur={handleBlur('password_confirmation')}
                  value={values.password_confirmation}
                  isDisabled={isSubmitting}
                  InputRightElement={
                    <Icon
                      as={show ? <MaterialIcons name="visibility" /> : <MaterialIcons name="visibility-off" />}
                      size={5} mr="2" color="muted.400"
                      onPress={handleClick}
                    />
                  }
                  placeholder="Confirm Password"
                />
                <FormControl.ErrorMessage>{errors.password_confirmation}</FormControl.ErrorMessage>
              </FormControl>

              <Button my="2" p='3'
                w={{
                  base: "80",
                  md: "80",
                }}
                bgColor='black'
                color='white'
                onPress={handleSubmit}
                isDisabled={isSubmitting || errors.first_name || errors.last_name || errors.email || errors.phone_number || errors.password}
              >
                {isSubmitting ?
                  (<>
                    <HStack space={2} justifyContent="center">
                      <Spinner accessibilityLabel="Logging In" color='white' />
                      <Heading color="white" fontSize="md">
                        Creating Account...
                      </Heading>
                    </HStack>
                  </>) : (" Create Account")}
              </Button>

              <Text color='blueGray.400'>Already have an account? <Text onPress={() => {
                props.navigation.navigate('Login')
              }}>Login</Text></Text>

            </Box>
          )}
        </Formik>
      </Center>
    </KeyboardAvoidingWrapper>
  )
}

export default SignupScreen
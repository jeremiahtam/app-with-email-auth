import React, { useState } from 'react'
import { Input, Box, Text, Image, Center, Heading, HStack, Button, Icon, Spinner, FormControl } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons"
import axios from 'axios';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { insertUserData } from '../../store/actions/user-info'
import { useDispatch, useSelector } from 'react-redux'
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import showToast from '../../functions/showToast'


const ResetPasswordScreen = (props) => {

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const recoveryCodeDetails = props.route.params;

  const resetPasswordHandler = async (values, setSubmitting, setErrors) => {
    values = {
      ...values,
      ...{
        email: recoveryCodeDetails.email,
        token: recoveryCodeDetails.token,
      }
    }

    try {
      const res = await axios.post('http://192.168.43.101:8000/api/password/reset-password',
        values,
        {
          headers: {
            "Accept": "application/json",
          },
          timeout: 5000
        }
      )
      const resData = res.data
      if (resData.success == false) {
        showToast('default', resData.message, '65%')
      } else {
        showToast('default', resData.message, '70%')
        props.navigation.navigate('Login', {
          email: recoveryCodeDetails.email,
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
      <Center bgColor='white' flex={1} justifyContent='center' alignContent='center' py='4' px='2%'>
        <Formik
          initialValues={{
            password: '',
            password_confirmation: '',
          }}
          validationSchema={Yup.object({
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
            resetPasswordHandler(values, setSubmitting, setErrors);
          }}
        >
          {({
            errors, touched, isSubmitting, setErrors, handleChange, handleBlur, handleSubmit, values
          }) => (
            <Box flex={1} alignContent='center'>
              <Text color='blueGray.400' textAlign='left'>Create New Password</Text>
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
                _text={{
                  color: 'white',
                  fontSize: 'md',
                  fontWeight: 'bold'
                }}
                bgColor='black'
                onPress={handleSubmit}
                borderColor='black' borderWidth='1'
                isDisabled={isSubmitting || errors.token || errors.password || errors.password_confirmation}
              >
                {isSubmitting ?
                  (<>
                    <HStack space={2} justifyContent="center">
                      <Spinner accessibilityLabel="Logging In" color='white' />
                      <Heading color="white" fontSize="md">
                        Submitting...
                      </Heading>
                    </HStack>
                  </>) : (" Change Password")}
              </Button>
            </Box>
          )}
        </Formik>
      </Center>
    </KeyboardAvoidingWrapper>
  )
}

export default ResetPasswordScreen

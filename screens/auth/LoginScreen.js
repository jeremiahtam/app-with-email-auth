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

const LoginScreen = (props) => {

  const dispatch = useDispatch();
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const inheritedParams = props.route.params;

  const loginHandler = async (values, setSubmitting, setErrors) => {

    try {
      const res = await axios.post('http://192.168.43.198:8000/api/login',
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
        console.log(resData.data)
        showToast('default', resData.message, '65%')
        dispatch(insertUserData(resData.data))
      }
    } catch (e) {
      console.log(e.response)
      if (e.code == 'ECONNABORTED') {
        showToast('default', 'Timeout. Try again.', '60%')
      }
      if (e?.response?.data) {
        const errorData = e.response.data
        setErrors(errorData.message);
        showToast('default', errorData.message, '60%')
      }
    }
    setSubmitting(false);
  }


  return (
    <KeyboardAvoidingWrapper>
      <Center bgColor='white' flex={1} justifyContent='center' alignContent='center' py='1/6' px='2%'>
        <Box flex={3} p='5' justifyContent='center' alignContent='center' overflow='hidden'>
          <Image
            source={require('../../assets/login.png')}
            alt="Alternate Text" alignSelf='center'
            maxW='300'
            maxH='300'
          />
        </Box>
        <Formik
          enableReinitialize
          initialValues={{
            email: inheritedParams?.email ? inheritedParams.email : '',
            password: inheritedParams?.password ? inheritedParams.password : '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Email cannot be empty!'),
            password: Yup.string()
              .max(30, 'Must be 30 characters or less')
              .min(8, "Must be at least eight characters")
              .required('Password cannot be empty'),
          })}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            console.log(inheritedParams)

            loginHandler(values, setSubmitting, setErrors);
          }}
        >
          {({
            errors, touched, isSubmitting, setErrors, handleChange, handleBlur, handleSubmit, values
          }) => (
            <Box flex={4}>
              <Heading textAlign='center'>Welcome</Heading>
              <Text color='blueGray.400' textAlign='center'>Login to your account to begin</Text>
              <FormControl
                isInvalid={errors.email && touched.email}
                w={{
                  base: "80",
                  md: "80",
                }}>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  isDisabled={isSubmitting}
                  my="2" placeholder="Email" fontSize={15}
                />
                <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={errors.password && touched.password}
                w={{
                  base: "80",
                  md: "80",
                }}>
                <Input my="2" fontSize={15} type={show ? "text" : "password"}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  isDisabled={isSubmitting}
                  InputRightElement={
                    <Icon as={show ? <MaterialIcons name="visibility" /> : <MaterialIcons name="visibility-off" />}
                      size={5} mr="2" color="muted.400" onPress={handleClick}
                    />
                  }
                  placeholder="Password"
                />
                <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
              </FormControl>
              <Button my="2" p='3'
                w={{
                  base: "80",
                  md: "80",
                }}
                bgColor='black'
                _text={{
                  color: 'white',
                  fontSize: 'md',
                  fontWeight: 'bold'
                }}
                onPress={handleSubmit} title="Submit"
                borderColor='black' borderWidth='1'
                isDisabled={isSubmitting || errors.password || errors.email}
              >
                {isSubmitting ?
                  (<>
                    <HStack space={2} justifyContent="center">
                      <Spinner accessibilityLabel="Logging In" color='white' />
                      <Heading color="white" fontSize="md">
                        Logging In...
                      </Heading>
                    </HStack>
                  </>) : (" Login")}
              </Button>
              <Text onPress={() => {
                props.navigation.navigate('ForgotPassword')
              }}>Forgot password</Text>
              <Text color='blueGray.400'>Dont have an account? <Text onPress={() => {
                props.navigation.navigate('Signup')
              }}>Signup up here</Text></Text>
            </Box>)}
        </Formik>
      </Center >
    </KeyboardAvoidingWrapper>
  )
}

export default LoginScreen

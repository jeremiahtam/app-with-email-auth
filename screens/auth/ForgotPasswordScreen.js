import React from 'react'
import { Input, Box, Text, Image, Center, Heading, HStack, Button, Icon, Spinner, FormControl } from 'native-base'
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import showToast from '../../functions/showToast'
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import axios from 'axios';

const ForgotPasswordScreen = (props) => {

  const forgotPasswordHandler = async (values, setSubmitting, setErrors) => {
    try {
      const res = await axios.post('http://192.168.43.101:8000/api/password/forgot-password',
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
        console.log(resData)
        showToast('default', resData.message, '65%')
        props.navigation.navigate('EnterRecoveryCode', {
          email: values.email,
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
            email: '',
          }}
          validationSchema={Yup.object({
            email: Yup.string().email('Invalid email address').required('Email cannot be empty!'),
          })}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            forgotPasswordHandler(values, setSubmitting, setErrors);
          }}
        >
          {({
            errors, touched, isSubmitting, setErrors, handleChange, handleBlur, handleSubmit, values
          }) => (
            <Box flex={1} alignContent='center'>
              <Text color='blueGray.400' textAlign='left'>Enter your email address</Text>
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
                isDisabled={isSubmitting || errors.email}
              >
                {isSubmitting ?
                  (<>
                    <HStack space={2} justifyContent="center">
                      <Spinner accessibilityLabel="Logging In" color='white' />
                      <Heading color="white" fontSize="md">
                        Submitting...
                      </Heading>
                    </HStack>
                  </>) : (" Submit")}
              </Button>
            </Box>)}
        </Formik>

      </Center>
    </KeyboardAvoidingWrapper>

  )
}

export default ForgotPasswordScreen

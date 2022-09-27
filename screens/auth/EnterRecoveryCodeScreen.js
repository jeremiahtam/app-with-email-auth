import React from 'react'
import { Input, Box, Text, Image, Center, Heading, HStack, Button, Icon, Spinner, FormControl } from 'native-base'
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import showToast from '../../functions/showToast'
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
import axios from 'axios';


const EnterRecoveryCodeScreen = (props) => {

  const forgotPasswordDetails = props.route.params;

  const resetPasswordHandler = async (values, setSubmitting, setErrors) => {
    values = {
      ...values,
      ...{ email: forgotPasswordDetails.email }
    }
    try {
      const res = await axios.post('http://192.168.43.198:8000/api/password/confirm-password-reset-token',
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
        setErrors(resData.errors);
        showToast('default', resData.message, '65%')
      } else {
        console.log(resData.message)
        props.navigation.navigate('ResetPassword', {
          email: values.email,
          token: values.token
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
            token: '',
          }}
          validationSchema={Yup.object({
            token: Yup.string().required('Reset code is required')
              .matches(/^[0-9]+$/, "Must be only digits")
              .min(7, 'Must be exactly 7 digits')
              .max(7, 'Must be exactly 7 digits'),
          })}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            resetPasswordHandler(values, setSubmitting, setErrors);
          }}
        >
          {({
            errors, touched, isSubmitting, setErrors, handleChange, handleBlur, handleSubmit, values
          }) => (
            <Box flex={1} alignContent='center'>
              <Text color='blueGray.400' textAlign='left'>Enter the seven(7) digit recovery code sent to your email address</Text>

              <FormControl
                isInvalid={errors.token && touched.token}
                w={{
                  base: "80",
                  md: "80",
                }}>
                <Input my="2" placeholder="Reset Code" fontSize={15}
                  onChangeText={handleChange('token')}
                  keyboardType='phone-pad'
                  onBlur={handleBlur('token')}
                  value={values.token}
                  isDisabled={isSubmitting}
                  maxLength={7}
                />
                <FormControl.ErrorMessage>{errors.token}</FormControl.ErrorMessage>
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
                        Confirming...
                      </Heading>
                    </HStack>
                  </>) : (" Confirm Token")}
              </Button>
            </Box>
          )}
        </Formik>
      </Center>
    </KeyboardAvoidingWrapper>
  )
}

export default EnterRecoveryCodeScreen

import React, { useState, useEffect } from 'react'
import { Input, Box, Text, Image, Center, Heading, Button, Icon } from 'native-base'

const WelcomeScreen = (props) => {

  return (

    <Center bgColor='white' flex={1} justifyContent='center' alignContent='center' py='1/6' px='2%'>
      <Box flex={4} p='5' justifyContent='center' alignContent='center' overflow='hidden'>

        <Image
          source={require('../../assets/welcome.png')}
          alt="Alternate Text"
          alignSelf='center'
          maxW='300'
          maxH='300'
        />
      </Box>
      <Box flex={3}>
        <Heading textAlign='center'>Welcome, login or create an account</Heading>
        <Text color='blueGray.400' textAlign='center'>Creating an account only takes 2 minutes</Text>
        <Button my="2" p='3'
          bgColor='white'
          _text={{
            color: 'black',
            fontSize: 'md',
            fontWeight: 'bold'
          }}
          w={{
            base: "80",
            md: "80",
          }}
          borderColor='black'
          borderWidth='1'
          onPress={() => {
            props.navigation.navigate('Signup')
          }}>
          Signup
        </Button>
        <Button
          my="2"
          p='3'
          _text={{
            color: 'white',
            fontSize: 'md',
            fontWeight: 'bold'
          }}
          w={{
            base: "80",
            md: "80",
          }}
          bgColor='black'
          borderColor='black'
          borderWidth='1'
          onPress={() => {
            props.navigation.navigate('Login')
          }}>
          Login
        </Button>

      </Box>

    </Center>
  )
}
export default WelcomeScreen

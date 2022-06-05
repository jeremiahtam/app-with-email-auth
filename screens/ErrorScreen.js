import React from 'react'
import { Box, Text, Icon, Center, Button, Heading, Switch } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ErrorScreen = (props) => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <Center bgColor='coolGray.100' flex={1} justifyContent='center' alignContent='center'>
      <Box flex={1} w='full' justifyContent='center' alignContent='center' p='3'>
        <Box p='3' bgColor='white' borderRadius='10' borderColor='gray.100' borderWidth='1' shadow='3'>
          <Text fontSize='18' fontWeight='700' py='2' color='red.500'>Error Notification</Text>
          <Text fontSize='16' color='gray.500'>Please attend to the following error notifications to proceed with using this application</Text>
          <Box flexDir='row' justifyContent='space-between' alignItems='center'>
            <Text fontWeight='600' color='gray.500' fontSize='16'>Turn on your data</Text>
            <Switch colorScheme="emerald" />
          </Box>
          <Box flexDir='row' justifyContent='space-between' alignItems='center'>
            <Text fontWeight='600' color='gray.500' fontSize='16'>Turn on your location</Text>
            <Switch colorScheme="emerald" />
          </Box>
        </Box>
      </Box>
    </Center>
  )
}

export default ErrorScreen

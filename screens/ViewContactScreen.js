import React from 'react'
import { Input, Box, Text, Checkbox, Divider, Image, Center, Heading, Pressable, Button, Icon } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from '@expo/vector-icons';

const ViewContactScreen = (props) => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: '',
      headerRight: () => (
        <Text
          onPress={() => {
            props.navigation.navigate('ContactStackNavigator', { screen: 'EditContact' })
          }}
          color="black"
        >Edit</Text>
      ),
    })
  })


  return (
    <Center bgColor='white' flex={1} alignContent='center' py='2' px='2%'>
      <Box flex={1} alignContent='center' width='100%'>
        <Heading px='2' mb='3' color='blue.800' textAlign='center'>John Makoko Lubambam</Heading>
          <Text fontSize='md' px='2' color="muted.500" textAlign='center'>+2347062290287</Text>
          <Text fontSize='md' px='2' color="muted.500" textAlign='center'>john@yahoo.com</Text>
        <Box mt='5' bgColor='blueGray.100' p='3'>
          <Box flexDir='row'>
            <Icon as={<Ionicons name="checkbox" />}
              size={4} m="2" color="green.700"
            />
            <Text fontWeight='extrabold' fontSize='md' color="muted.400">See my location history</Text>
          </Box>
          <Box flexDir='row'>
            <Icon as={<MaterialIcons name="check-box-outline-blank" />}
              size={4} m="2" color="green.700"
            />
            <Text fontWeight='extrabold' fontSize='md' color="muted.400">See my live location</Text>
          </Box>
        </Box>
      </Box>
    </Center>
  )
}

export default ViewContactScreen
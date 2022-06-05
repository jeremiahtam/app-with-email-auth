import React from 'react'
import { Pressble, Input, Switch, Box, Text, ScrollView, Checkbox, Divider, Image, Center, Heading, Pressable, Button, Icon } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from '@expo/vector-icons';

const NotificationsSettingsScreen = (props) => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true
    })
  })

  return (
    <Center bgColor='white' flex={1} justifyContent='center' alignContent='center' py='2' px='2%'>
      <Box flex={1} w='full'>
        <ScrollView>
          <Pressable>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"} p='2'>
                  <Text color='black' textAlign='left' fontSize='16' fontWeight='500' >Push Notification</Text>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Receive Push Notifications</Text>
                    <Switch defaultIsChecked colorScheme="emerald" />
                  </Box>
                </Box>

              )
            }}
          </Pressable>
          <Divider />
          <Pressable>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"} p='2'>
                  <Text color='black' textAlign='left' fontSize='16' fontWeight='500' >Lock Screen Shortcut</Text>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>allow shortcut to hover on locak screen</Text>
                    <Switch defaultIsChecked colorScheme="emerald" />
                  </Box>
                </Box>

              )
            }}
          </Pressable>
        </ScrollView>
      </Box>
    </Center>
  )
}

export default NotificationsSettingsScreen

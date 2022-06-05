import React from 'react'
import { Box, Text, Pressable, Center, Heading, ScrollView, Divider } from 'native-base'

const LocationHistoryScreen = (props) => {

  return (
    <Center bgColor='white' flex={1} justifyContent='center' alignContent='center' px='2%'>
      <Box flex={1} w='full'>
        <Pressable onPress={()=>{
          props.navigation.navigate('Map',{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            city:"Muchin, Lagos"
          })
        }}>
          {({ isHovered, isFocused, isPressed }) => {
            return (
              <Box bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"} p='2'>
                <Text color='black' textAlign='left' fontSize='14' fontWeight='700' color='blue.700'>Last Seen</Text>
                <Text color='gray.500' textAlign='left'>Muchin, Lagos</Text>
                <Box flexDir='row' justifyContent='space-between'>
                  <Text color='gray.500'>Nov 12, 2020</Text>
                  <Text color='gray.500'>9:40 PM</Text>
                </Box>
              </Box>
            )
          }}
        </Pressable>

        <ScrollView>
          <Text fontSize='14' color='gray.500' px='2%'>Older</Text>
          <Divider />
          <Pressable>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box p='2' bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"}>
                  <Text color='black' textAlign='left' fontSize='14' fontWeight='700' >Muchin, Lagos</Text>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Nov 12, 2020</Text>
                    <Text color='gray.500'>9:40 PM</Text>
                  </Box>
                </Box>
              )
            }}
          </Pressable>
          <Divider />
          <Pressable>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box p='2' bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"}>
                  <Text color='black' textAlign='left' fontSize='14' fontWeight='700' >Muchin, Lagos</Text>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Nov 12, 2020</Text>
                    <Text color='gray.500'>9:40 PM</Text>
                  </Box>
                </Box>
              )
            }}
          </Pressable>
          <Divider />
          <Pressable>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box p='2' bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"}>
                  <Text color='black' textAlign='left' fontSize='14' fontWeight='700' >Muchin, Lagos</Text>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Nov 12, 2020</Text>
                    <Text color='gray.500'>9:40 PM</Text>
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

export default LocationHistoryScreen
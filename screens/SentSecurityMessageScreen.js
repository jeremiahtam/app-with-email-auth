import React from 'react'
import { useDisclose, Box, Text, ScrollView, Divider, Center, Pressable } from 'native-base'
import ViewAlertActionSheet from '../components/ViewAlertActionSheet'

const SentSecurityMessageScreen = (props) => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      title: 'Sent Alerts'
    })
  })
  const [messageDir, setMessageDir] = React.useState()

  const { isOpen, onOpen, onClose } = useDisclose()

  return (
    <Center bgColor='white' flex={1} justifyContent='center' alignContent='center' py='2' px='2%'>
      <Box flex={1} w='full'>
        <ScrollView>
          <Pressable onPress={() => {
            setMessageDir('To');
            onOpen();
          }}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"} p='2'>
                  <Box flexDir='row'>
                    <Text>To: </Text>
                    <Text color='gray.500' textAlign='left' fontSize='14' fontWeight='700'>
                      Mark Johnson
                    </Text>
                  </Box>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='black'>I am in the refrigirator</Text>
                  </Box>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Nov 12, 2020</Text>
                    <Text color='gray.500'>9:40 PM</Text>
                  </Box>
                </Box>
              )
            }}
          </Pressable>
          <Divider />
          <Pressable onPress={() => {
            setMessageDir('To');
            onOpen();
          }}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"} p='2'>
                  <Box flexDir='row'>
                    <Text>To: </Text>
                    <Text color='gray.500' textAlign='left' fontSize='14' fontWeight='700'>
                      Mark Johnson
                    </Text>
                  </Box>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='black'>Johnny Bravo sent you s security alert</Text>
                  </Box>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Nov 12, 2020</Text>
                    <Text color='gray.500'>9:40 PM</Text>
                  </Box>
                </Box>
              )
            }}
          </Pressable>
          <Divider />
          <Pressable onPress={() => {
            setMessageDir('To');
            onOpen();
          }}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"} p='2'>
                  <Box flexDir='row'>
                    <Text>To: </Text>
                    <Text color='gray.500' textAlign='left' fontSize='14' fontWeight='700'>
                      Mark Johnson
                    </Text>
                  </Box>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='black'>Johnny Bravo sent you s security alert</Text>
                  </Box>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Nov 12, 2020</Text>
                    <Text color='gray.500'>9:40 PM</Text>
                  </Box>
                </Box>
              )
            }}
          </Pressable>
        </ScrollView>
        <ViewAlertActionSheet isOpen={isOpen} onClose={onClose} messageDir={messageDir}
          viewMap={() => {
            props.navigation.navigate('Map', {
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              city: "Muchin, Lagos"
            })
          }}
        />
      </Box>
    </Center>
  )
}

export default SentSecurityMessageScreen

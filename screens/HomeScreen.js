import React from 'react'
import { Box, Text, HStack, Pressable, Image, Center, Menu, Heading, Button, Divider, Icon, Switch } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = (props) => {
//   const loggedInUserData = useSelector((state) => state.userInfo.loggedInUserData); //get all user personal data
// console.log(loggedInUserData )
  return (
    <Center bgColor='white' flex={1}>
      <Box flex={1} w='full' mt='45'>
        <Box flex={2} p='6' opacity='90'>
          <Box borderRadius='10' bgColor='amber.100' p={5}>
            <Text fontSize={20} fontWeight='bold'>Jeremiah</Text>
            <Text color='gray.600'> Warri, Delta State</Text>
            <Divider my="2" bg='white' />
            <Box flexDir='row' justifyContent='space-between' alignItems='center'>
              <Text color="gray.500">Live Tracking</Text>
              <Switch size="sm" />
            </Box>
          </Box>
          <Box mt='2' borderRadius='10' flexDir='row' justifyContent='space-between'>
            <Box bgColor='cyan.100' p={3} w='48%'>
              <HStack space={2} >
                <Box alignContent='center' justifyContent='center'>
                  <MaterialCommunityIcons name="history" size={20} color="#10b981" />
                </Box>
                <Divider bg="emerald.500" thickness="1" orientation="vertical" />
                <Text color="emerald.700" fontSize="sm" flex={4} alignContent='center' justifyContent='center'>
                  Location History
                </Text>
              </HStack>
            </Box>
            <Box bgColor='cyan.100' p={3} w='48%'>
              <HStack space={2} >
                <Box alignContent='center' justifyContent='center'>
                  <Feather name="send" size={20} color="#10b981" />
                </Box>
                <Divider bg="emerald.500" thickness="1" orientation="vertical" />
                <Text color="emerald.700" fontSize="sm" flex={4} alignContent='center' justifyContent='center'>
                  Sent Security Alerts
                </Text>
              </HStack>
            </Box>
          </Box>
        </Box>
        <Box flex={3} p='6' bg='gray.100' borderTopRadius='30'>
          <Box p={3} flex={1} alignContent='center' justifyContent='center'>
            <HStack space={2}>
              <Box alignContent='center' justifyContent='center'>
                <Feather name="send" size={30} color="#71717a" />
              </Box>
              <Divider bg="gray.500" thickness="1" orientation="vertical" />
              <Text color="gray.500" fontSize="2xl" flex={4} alignContent='center' justifyContent='center'>
                Tap To Send Alert
              </Text>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Center >
  )
}
export default HomeScreen;
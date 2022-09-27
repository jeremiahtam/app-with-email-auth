import React from 'react'
import { Box, Text, HStack, Center, Menu, Heading, Button, Divider, Icon, Switch } from 'native-base'

const SettingsScreen = () => {
  return (
    <Center bgColor='white' flex={1}>
      <Box flex={1} w='full' mt='45'>
        <Box flex={2} p='6' opacity='90'>
          <Box p={5}>
            <Text fontSize={20} fontWeight='bold'>Settings Page</Text>
          </Box>
        </Box>
        <Box flex={3} p='6' bg='gray.100' borderTopRadius='30'>
          <Box p={3} flex={1} alignContent='center' justifyContent='center'>
            <HStack space={2} alignContent='center' justifyContent='center'>

            </HStack>
          </Box>
        </Box>
      </Box>
    </Center >
  )
}

export default SettingsScreen
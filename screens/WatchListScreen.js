import React from 'react'
import { Box, Text, Pressable, Center, Heading, ScrollView } from 'native-base'

const WatchListScreen = (props) => {
  return (
    <Center bgColor='white' flex={1}>
      <Box flex={1} w='full' mt='45' borderTopRadius='30' bgColor='coolGray.100'>
        <Box flex={1} p='6' opacity='90'>
          <Box flexDir='row' justifyContent='space-between'>
            <Heading color='black' mb='4'>Watch List</Heading>
          </Box>
          <ScrollView>
            <Pressable onPress={() => {
              props.navigation.navigate('WatchListStackNavigator', { screen: 'LocationHistory' })
            }}>
              <Box p='4' bgColor='white'>
                <Box flexDir='row' justifyContent='space-between'>
                  <Text fontWeight='bold' fontSize={17} color='blue.700'>John Makoko Lubambam</Text>
                </Box>
                <Text color='gray.400'>johnmakoko@gmail.com</Text>
                <Text color='gray.400'>+2347056152894</Text>
              </Box>
            </Pressable>


          </ScrollView>

        </Box>
      </Box>
    </Center>
  )
}
export default WatchListScreen
import React from 'react'
import { Actionsheet, Text, Box, Icon, Button } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const ViewAlertActionSheet = (props) => {

  return (
    <Actionsheet isOpen={props.isOpen} onClose={props.onClose}>
      <Actionsheet.Content>
        <Box w="100%" px={4} py={2} justifyContent="flex-start" flexDir='row'>
          <Text fontSize='16' fontWeight='700' color='gray.600'>{props.messageDir}: </Text>
          <Text fontSize='16' fontWeight='700' color='gray.600'>Mark</Text>
        </Box>
        <Box w="100%" h={60} px={4} justifyContent="center">
          <Text fontSize='16' fontWeight='700' color='gray.600'>Message</Text>
          <Text>This is a radio message to my bay bayyyyyyyyy. And I'm begging for you to come back</Text>
        </Box>
        <Box w="100%" px={4} py={2} justifyContent="flex-start" flexDir='row'>
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
            borderColor='gray.600'
            borderWidth='1'
            onPress={props.viewMap}>
            View Location
          </Button>

        </Box>
      </Actionsheet.Content>
    </Actionsheet>
  )
}
export default ViewAlertActionSheet;
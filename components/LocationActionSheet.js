import React from 'react'
import { Actionsheet, Text, Icon } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LocationActionSheet = (props) => {
  return (
    <Actionsheet isOpen={props.isOpen} onClose={props.onClose}>
      <Actionsheet.Content>
        <Actionsheet.Item onPress={props.editNavigate}
          _text={{
            color: 'blueGray.700'
          }}
          startIcon={
            <Icon
              alignSelf='flex-start' as={MaterialIcons}
              name={Platform.OS ? 'edit' : 'edit'}
              size="6" color="blueGray.700"
            />
          }>Edit</Actionsheet.Item>
        <Actionsheet.Item onPress={props.onDelete} color="blueGray.400"
          _text={{
            color: 'blueGray.700'
          }}
          startIcon={
            <Icon
              alignSelf='flex-start' as={MaterialIcons}
              name={Platform.OS ? 'delete-outline' : 'delete-outline'}
              size="6" color="blueGray.700"
            />
          }>Delete</Actionsheet.Item>
        <Actionsheet.Item onPress={props.onCancel} color="blueGray.400"
          _text={{
            color: 'blueGray.700'
          }}
          startIcon={
            <Icon
              alignSelf='flex-start' as={MaterialCommunityIcons}
              name={Platform.OS ? 'cancel' : 'cancel'}
              size="6" color="blueGray.700"
            />
          }>
          <Text>Cancel</Text>


        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>  )
}

export default LocationActionSheet

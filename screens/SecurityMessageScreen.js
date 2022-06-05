import React from 'react'
import { TextArea, Box, Text, Center } from 'native-base'
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { StackActions } from '@react-navigation/native';

const SecurityMessageScreen = (props) => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true,
      headerRight: () => (
        <Text
          onPress={() => {
            const popAction = StackActions.pop(1);
            props.navigation.dispatch(popAction);
          }}
          color="black"
        >Save</Text>
      ),
    })
  })

  return (
    <Center flex={1} bgColor='white' justifyContent='center' alignContent='center' pt='3' px='2%'>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box flex={1} w='full' px="3">
          <TextArea
            borderColor='white'
            numberOfLines={4}
            fontSize={16}
            placeholder="Write a short message"
            _focus={{
              borderColor: 'gray.200',
              color: 'gray.500'
            }}
            textAlignVertical='top'
          />

        </Box>

      </TouchableWithoutFeedback>
    </Center>
  )
}

export default SecurityMessageScreen

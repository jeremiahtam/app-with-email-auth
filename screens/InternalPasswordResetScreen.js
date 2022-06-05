import React from 'react'
import { Input, Box, Text, Image, Center, Heading, Button, Icon, TextArea } from 'native-base'
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons"

const InternalPasswordReset = () => {

  const [show, setShow] = React.useState({
    'oldPassword': false,
    'newPassword': false,
    'reNewPassword': false
  })

  const handleClick = (inputOption) => {
   setShow(()=>({ ...show, [inputOption] : !show[`${inputOption}`] }))
  }

  return (
    <Center flex={1} bgColor='white' justifyContent='center' alignContent='center' pt='3' px='2%'>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box flex={1} w='full' px="3">
          <Input my="2" fontSize={15} type={show.oldPassword ? "text" : "password"} placeholder="Old Password"
            w={{
              base: "80",
              md: "80",
            }}
            InputRightElement={
              <Icon
                as={show.oldPassword  ? <MaterialIcons name="visibility" /> : <MaterialIcons name="visibility-off" />}
                size={5} mr="2" color="muted.400" onPress={() => { handleClick('oldPassword') }}
              />
            }
          />
          <Input my="2" fontSize={15} type={show.newPassword ? "text" : "password"} placeholder="New Password"
            w={{
              base: "80",
              md: "80",
            }}
            InputRightElement={
              <Icon
                as={show.newPassword ? <MaterialIcons name="visibility" /> : <MaterialIcons name="visibility-off" />}
                size={5} mr="2" color="muted.400" onPress={() => { handleClick('newPassword') }}
              />
            }
          />
          <Input my="2" fontSize={15} type={show.reNewPassword ? "text" : "password"} placeholder="Repeat New Password"
            w={{
              base: "80",
              md: "80",
            }}
            InputRightElement={
              <Icon
                as={show.reNewPassword ? <MaterialIcons name="visibility" /> : <MaterialIcons name="visibility-off" />}
                size={5} mr="2" color="muted.400" onPress={() => { handleClick('reNewPassword') }}
              />
            }
          />
          <Button my="2" p='3' borderColor='black' borderWidth='1'
            w={{
              base: "80",
              md: "80",
            }}
            bgColor='black'
            _text={{
              color: 'white',
              fontSize: 'md',
              fontWeight: 'bold'
            }}
            onPress={() => {
              props.navigation.navigate('HomePage')
            }}
          >
            Change Password
          </Button>
        </Box>

      </TouchableWithoutFeedback>
    </Center>
  )
}

export default InternalPasswordReset

import React, { useEffect, useState } from 'react'
import { Box, Text, ScrollView, Divider, Center, Pressable} from 'native-base'
import axios from 'axios';
import { deleteUserData } from '../store/actions/user-info'
import { useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message';

const SettingsScreen = (props) => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: true
    })
  })

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userInfo.loggedInUserData); //get all user personal data

  const showToast = (type,text1,width) => {
    Toast.show({
      type: type,
      text1: text1,
      position: 'bottom',
      props: {
        width: width
      }
    });
  }

  const logoutHandler = async (userData) => {
    try {
      console.log(userData)
      const res = await axios.post('http://192.168.43.101:8000/api/logout', {},
        {
          headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${userData.token}`
          },
          timeout: 2000
        }
      )
      const resData = res.data
      if (resData.success == false) {
        showToast('default',resData.message,'65%')
      } else {
        showToast('default',resData.message,'65%')
        dispatch(deleteUserData())
      }
    } catch (e) {
      if (e.response.data.message == 'Unauthenticated') {
        dispatch(deleteUserData())
      }
      showToast('default', e.response.data.message,'70%')
      // console.log(e.response)
    }
  }


  return (
    <Center bgColor='white' flex={1} justifyContent='center' alignContent='center' py='2' px='2%'>
      <Box flex={1} w='full'>
        <ScrollView>

          <Pressable onPress={() => {
            props.navigation.navigate('SettingsStackNavigator', { screen: 'SecurityMessage' })
          }}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"} p='2'>
                  <Text color='black' textAlign='left' fontSize='16' fontWeight='500' >Security Message</Text>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Edit Security Message</Text>
                  </Box>
                </Box>

              )
            }}
          </Pressable>
          <Divider />
          <Pressable onPress={() => {
            props.navigation.navigate('SettingsStackNavigator', { screen: 'InternalPasswordReset' })
          }}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"} p='2'>
                  <Text color='black' textAlign='left' fontSize='16' fontWeight='500' >Reset Password</Text>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Change Password</Text>
                  </Box>
                </Box>

              )
            }}
          </Pressable>
          <Divider />
          <Pressable onPress={() => {
            props.navigation.navigate('SettingsStackNavigator', { screen: 'NotificationsSettings' })
          }}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"} p='2'>
                  <Text color='black' textAlign='left' fontSize='16' fontWeight='500' >Notifications</Text>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Notifications Settings</Text>
                  </Box>
                </Box>

              )
            }}
          </Pressable>
          <Divider />
          <Pressable onPress={() => { logoutHandler(userData) }}>
            {({ isHovered, isFocused, isPressed }) => {
              return (
                <Box bg={isPressed ? "blueGray.100" : isHovered ? "blueGray.100" : "white"} p='2'>
                  <Text color='black' textAlign='left' fontSize='16' fontWeight='500' >Logout</Text>
                  <Box flexDir='row' justifyContent='space-between'>
                    <Text color='gray.500'>Logout of account</Text>
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

export default SettingsScreen

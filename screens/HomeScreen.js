import React from 'react'
import { Box, Text, HStack, Center, Menu, Heading, Button, Divider, Icon, Switch } from 'native-base'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserData } from "../store/actions/user-info";
import showToast from '../functions/showToast'
import axios from "axios";

const HomeScreen = (props) => {
  const loggedInUserData = useSelector((state) => state.userInfo.loggedInUserData); //get all user personal data
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    console.log(loggedInUserData);
    try {
      const res = await axios.post(
        `http://192.168.43.198:8000/api/logout`,
        {},
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${loggedInUserData.token}`,
          },
          timeout: 2000,
        }
      );
      const resData = res.data;
      if (resData.success == false) {
        showToast("default", resData.message);
      } else {
        showToast("default", resData.message);
        dispatch(deleteUserData());
      }
    } catch (e) {
      console.log(e);
      if (e.code == "ECONNABORTED") {
        showToast("default", "Timeout. Try again.");
      }
      if (e?.response?.data !== undefined) {
        const errorData = e.response.data;
        // setErrors(errorData.errors);
        showToast("default", errorData.message);
        if (errorData.message == "Unauthenticated") {
          dispatch(deleteUserData());
        }
      }
      showToast("default", e.response.data.message);
      // console.log(e.response)
    }
  };
  return (
    <Center bgColor='white' flex={1}>
      <Box flex={1} w='full' mt='45'>
        <Box flex={2} p='6' opacity='90'>
          <Box p={5}>
            <Text fontSize={20} fontWeight='bold'>Welcome Home</Text>
          </Box>
        </Box>
        <Box flex={3} p='6' bg='gray.100' borderTopRadius='30'>
          <Box p={3} flex={1} alignContent='center' justifyContent='center'>
            <HStack space={2} alignContent='center' justifyContent='center'>
              <Button px={4} alignSelf='center' onPress={() => {
                logoutHandler();
              }}>LogOut</Button>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Center >
  )
}
export default HomeScreen;
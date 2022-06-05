import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const LOAD_USER_DATA = 'LOAD_USER_DATA'
export const ADD_USER_DATA = 'ADD_USER_DATA'
export const DELETE_USER_DATA = 'DELETE_USER_DATA'

export const loadUserData = () => {

  return async dispatch => {
    try {
      const storedUserData = await AsyncStorage.getItem('userInfo')
      const info = storedUserData != null ? JSON.parse(storedUserData) : null;
      dispatch({
        type: LOAD_USER_DATA,
        loggedInUserInfo: info
      })
    } catch (e) {
      console.log(e.response)
    }
  }
}
export const insertUserData = (data) => {

  return async dispatch => {
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('userInfo', jsonValue)
      dispatch({
        type: LOAD_USER_DATA,
        loggedInUserInfo: JSON.parse(jsonValue)
      })
    } catch (e) {
      console.log(e.response)
    }
  }
}
export const deleteUserData = () => {

  return async dispatch => {
    try {
      await AsyncStorage.removeItem('userInfo')
      dispatch({
        type: DELETE_USER_DATA,
        loggedInUserInfo: null
      })
    } catch (e) {
      console.log(e.response)
      return e;
    }
  }
}
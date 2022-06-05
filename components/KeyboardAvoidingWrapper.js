import React from 'react'
import { SafeAreaView, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'

const KeyboardAvoidingWrapper = ({ children }) => {

  return (
    < KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }
      }
    >
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          {children}
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView >
  )
}

export default KeyboardAvoidingWrapper
import React from 'react'
import { Modal, Box, Text, Button, Pressable, useDisclose, Heading, Center } from 'native-base'
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import ContactsActionSheet from '../components/ContactsActionSheet'

const ContactsScreen = (props) => {

  const { isOpen, onOpen, onClose } = useDisclose()

  const [modalVisible, setModalVisible] = React.useState(false)

  return (
    <Center bgColor='white' flex={1}>
      <Box flex={1} w='full' mt='45' borderTopRadius='30' bgColor='coolGray.100'>
        <Box flex={1} p='6' opacity='90'>
          <Box flexDir='row' justifyContent='space-between'>
            <Heading color='black' mb='4'>Contacts</Heading>
            <Text color='gray.600' onPress={() => {
              props.navigation.navigate('ContactStackNavigator', { screen: 'AddContact' })
            }}>
              <Ionicons name="person-add-outline" size={14} color="gray" /> Add New
            </Text>
          </Box>
          <Pressable onPress={() => {
            props.navigation.navigate('ContactStackNavigator', { screen: 'ViewContact' })
          }}>
            <Box p='4' bgColor='white'>
              <Box flexDir='row' justifyContent='space-between'>
                <Box>
                  <Text fontWeight='bold' fontSize={17}>John Makoko Lubambam</Text>
                </Box>
                <Box>
                  <Pressable onPress={onOpen}>
                    <SimpleLineIcons name="options" size={23} color="black" />
                  </Pressable>
                </Box>
              </Box>
              <Text color='gray.400'>johnmakoko@gmail.com</Text>
              <Text color='gray.400'>+2347056152894</Text>
            </Box>
          </Pressable>
          <Modal
            isOpen={modalVisible}
            onClose={() => setModalVisible(false)}
            avoidKeyboard
            justifyContent="center"
            size="lg"
          >
            <Modal.Content>
              <Modal.CloseButton />
              <Modal.Header>Delete Contact</Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this contact permanently?
              </Modal.Body>
              <Modal.Footer justifyContent='space-between' flexDir='row'>
                <Button w='45%'
                  onPress={() => {
                    setModalVisible(false)
                  }}
                  bgColor='transparent'
                  _text={{
                    color: 'blueGray.400',
                    fontSize: 'md',
                    fontWeight: 'bold'
                  }}
                >
                  Cancel
                </Button>
                <Button w='45%'
                  onPress={() => {
                    setModalVisible(false)
                  }}
                  bgColor='transparent'
                  _text={{
                    color: 'red.500',
                    fontSize: 'md',
                    fontWeight: 'bold'
                  }}
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal.Content>
          </Modal>

          <ContactsActionSheet isOpen={isOpen} onClose={onClose}
            editNavigate={() => {
              onClose(true)
              props.navigation.navigate('ContactStackNavigator', { screen: 'EditContact' })
            }}
            onDelete={() => {
              onClose(true)
              setModalVisible(!modalVisible)
            }}
            onCancel={() => {
              onClose(true)
            }}
          />
        </Box>
      </Box>
    </Center>
  )
}
export default ContactsScreen;
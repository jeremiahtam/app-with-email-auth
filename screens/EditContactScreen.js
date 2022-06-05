import React from 'react'
import { Input, Box, Text, Checkbox, Divider, Image, Center, Heading, Button, Icon } from 'native-base'
import { MaterialIcons } from "@expo/vector-icons"
import { Ionicons } from '@expo/vector-icons';

const EditContactScreen = (props) => {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <Text
          onPress={() => alert('This is a button!')}
          color="black"
        >Save</Text>
      ),
    })
  })

  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [groupValues, setGroupValues] = React.useState([])

  return (
    <Center bgColor='white' flex={1} alignContent='center' py='2' px='2%'>
      <Box flex={1} alignContent='center'>
        <Text color='blueGray.400' textAlign='left'>Edit contact</Text>
        <Input my="2" placeholder="First Name" fontSize={15}
          w={{
            base: "80",
            md: "80",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="drive-file-rename-outline" />}
              size={5} ml="2" color="muted.400"
              onPress={handleClick}
            />
          }
        />
        <Input my="2" placeholder="Last Name" fontSize={15}
          w={{
            base: "80",
            md: "80",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="drive-file-rename-outline" />}
              size={5} ml="2" color="muted.400"
              onPress={handleClick}
            />
          }
        />
        <Input my="2" placeholder="Phone Number" fontSize={15}
          w={{
            base: "80",
            md: "80",
          }}
          InputLeftElement={
            <Icon
              as={<Ionicons name="phone-portrait-outline" />}
              size={5} ml="2" color="muted.400"
              onPress={handleClick}
            />
          }
        />
        <Input my="2" placeholder="Email" fontSize={15}
          w={{
            base: "80",
            md: "80",
          }}
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="alternate-email" />}
              size={5} ml="2" color="muted.400"
              onPress={handleClick}
            />
          }
        />
        <Box flexDir='row' justifyContent='space-between'>
            <Text color='blueGray.400'>Permissions (optional)</Text>
            <Icon
              alignSelf='flex-end' as={Ionicons}
              name={Platform.OS ? 'chevron-down' : 'chevron-down'}
              size="6" color="blueGray.400"
            />
        </Box>
        <Box>
          <Checkbox.Group
            onChange={setGroupValues}
            value={groupValues}
            accessibilityLabel="choose numbers"
          >
            <Checkbox value="one" colorScheme='green' my={2}>See my location history</Checkbox>
            <Checkbox value="two" colorScheme='green'>See my live location</Checkbox>
          </Checkbox.Group>
        </Box>
      </Box>

    </Center>
  )
}

export default EditContactScreen
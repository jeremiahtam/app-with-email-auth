import React from 'react'
import { Center, Box, Text, Icon } from 'native-base'
import MapView, { Marker } from 'react-native-maps';

const MapScreen = (props) => {

  const mapDetails = props.route.params

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerShown: false,
    })
  })

  return (
    <Center bgColor='white' flex={1} justifyContent='center' alignContent='center'>
      <Box flex={1} w='full'>
        <MapView flex={1} justifyContent='center' alignContent='center'
          initialRegion={{
            latitude: mapDetails.latitude,
            longitude: mapDetails.longitude,
            latitudeDelta: mapDetails.latitudeDelta,
            longitudeDelta: mapDetails.longitudeDelta,
          }}
        >
          <Marker
            coordinate={{
              latitude: mapDetails.latitude,
              longitude: mapDetails.longitude
            }}
          />
        </MapView>
        <Box zIndex={2} position="absolute" top='100' left='30' padding='2' bgColor='black:alpha.30'>
          <Box flexDir='row'>
            <Text color='white'>Ikeja, Lagos</Text>
          </Box>
          <Box flexDir='row'>
            <Text color='white'>Lat: </Text>
            <Text color='white' fontWeight='extrabold'>3.223345</Text>
          </Box>
          <Box flexDir='row'>
            <Text color='white'>Long: </Text>
            <Text color='white'>9.456773</Text>
          </Box>

        </Box>
      </Box>
    </Center>
  )
}

export default MapScreen

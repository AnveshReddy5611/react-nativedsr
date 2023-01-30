import { View, Text } from 'react-native'
import React from 'react'
import bulboffimage from '../images/bulb-off.jpg'
const BulbOff = () => {
  return (
    <View>
      <Text>BulbOff</Text>
      <Image source={bulboffimage}/>
    </View>
  )
}

export default BulbOff
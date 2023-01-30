import { View, Text,Button,Image, StyleSheet} from 'react-native'
import React,{useState} from 'react'
import BulbOff from './BulbOff'
import emptyLight from '../images/traffic-light.png';
import redLight from '../images/traffic-light-red.png';
import  yellowLight from '../images/traffic-light-yellow.png';
import greenLight from '../images/traffic-light-green.png'
const Home = () => {
const [trafficLight, setTrafficLight]=useState(emptyLight) 
  return (
    <View >
     <Image style ={style.image} source={trafficLight}/>
     <Button style={style.red} title={"Red"} color="red" onPress={()=>setTrafficLight(redLight)}/>
     <Button title={"yellow"} color="Yellow" onPress={()=>setTrafficLight(yellowLight)}/>
     <Button title={"green"} color="G reen" onPress={()=>setTrafficLight(greenLight)}/>
    </View>
  )
}

export default Home
const style= StyleSheet.create({
    image:{
        width:200,
        height: 200
    },
    
})



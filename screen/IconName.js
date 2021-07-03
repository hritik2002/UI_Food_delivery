import React from 'react'
import {
  Text , View , StyleSheet , ScrollView , StatusBar , TextInput , FlatList
  , Image
} from 'react-native'
import Icons from 'react-native-vector-icons/Feather'

Icons.loadFont();

const Popular=({icon})=>{

    

  return(
    <>
    <Icons name={icon} size={14} />
    </>
  )
}

export default Popular;

const styles = StyleSheet.create({
  
})

import React from 'react'
import {
  Text , View , StyleSheet , ScrollView , StatusBar , TextInput , FlatList
  , Image,
  TouchableOpacity
} from 'react-native'
import Icons5 from 'react-native-vector-icons/FontAwesome5'

const Popular=()=>{

    const Data = [
        {
          id: 0,
          title:"Pizza",
          src:require("./pizza1.png"),
          Selected:true
        },
        {
          id: 1,
          title:"Seafood",
          src:require("./seafood.png"),
          Selected:false
        },
        {
          id: 2,
          title:"Soft Drinks",
          src:require("./softDrink.png"),
          Selected:false
        },
        {
            id:3,
            title:"Cake",
            src:require("./cake.png"),
            Selected:false
        }
      ]
      const Item=({value})=>(
          
        <TouchableOpacity>
            <View style={[styles.mainArea,{
           backgroundColor: value.item.Selected ? "#F5CA48":"#fff"
        }]}>
                <Image 
                    source={value.item.src}
                    style={{width:60,height:60}}
                />
                <Text style={{fontSize:14,fontWeight:"600"}}>{value.item.title}</Text>
                <View style={[styles.circle,{
                    backgroundColor: value.item.Selected ? "white" : "#F26C68" 
                }]}>
                    <Icons5 name="chevron-right" style={{
                        color: value.item.Selected? "#000":"#fff",
                        fontWeight:"bold"
                    }} size={11} />
                </View>
            </View>
        </TouchableOpacity>
      )

  return(
    <>
    <View style={styles.categories}>
        <Text style={{fontSize:16,fontWeight:"bold"}}>Categories</Text>
        <FlatList 
            data={Data}
            renderItem={(item)=>(
                <Item value={item} />
                )}
                keyExtractor={(item)=>item.id}
                horizontal
            />
        </View>
    </>
  )
}

export default Popular;

const styles = StyleSheet.create({
    categories:{
        marginTop:30
    },
    mainArea:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-evenly",
        alignItems:"center",
        width:110,
        height:177,
        backgroundColor:"#F5CA48",
        marginHorizontal:7,
        marginTop:15,
        borderRadius:8,
        shadowColor:"#000",
        shadowOffset:{
            width:4,
            height:2
        },
        shadowOpacity:8,
        shadowRadius:8,
        elevation:2
    },
    circle:{
        width:26,
        height:26,
        backgroundColor:"#fff",
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    }
    
  
})


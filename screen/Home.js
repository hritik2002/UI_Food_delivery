import React from 'react'
import {
  Text , View , StyleSheet , ScrollView , StatusBar , TextInput , FlatList
  , Image,
  TouchableOpacity
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import Icons5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
Icons.loadFont();

import Popular from './Popular';
import Categories from './Categories';
import { version } from '@babel/core'


const Home=({navigation})=>{


  return(
    <ScrollView style={styles.body} contentInsetAdjustmentBehavior="automatic"
     showsVerticalScrollIndicator={false} >
      <StatusBar backgroundColor="#ececec" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Image 
              source={require('./profile.jpeg')}
              style={{width:40,height:40,borderRadius:100,backgroundColor:"red"}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      {/* End of Header */}
      {/* Main starts */}
      <View style={styles.main}>
        <Text style={styles.titile}>Food</Text>
        <Text style={styles.Heading}>Delivery</Text>
        <View style={styles.searchSection}>
          <Icons name="search" size={16} color="#404040" style={{marginRight:0,marginTop:7}} />
          <TextInput 
              style={styles.InputSearch}
              placeholder="Search..."
              placeholderTextColor="#606060"
          ></TextInput>
        </View>

      <Categories />
      {/* <Popular /> */}
      <View style={styles.popular}>
        <Text style={{fontSize:16,fontWeight:"bold"}}>Popular</Text>
        {
          Popular.map((val,index)=>(
            
            <TouchableOpacity onPress={()=> navigation.navigate('Details',{
              item : val
            })} key={index}>
              <View style={styles.popularCard} >
                <View style={styles.first}>
                  <Icons5 name={val.iconName1} color={"#F5CA48"} size={12 } />
                  <Text style={{fontWeight:"bold",fontSize:14}} >{val.heading}</Text>
                  </View>
                <View style={styles.popularCardMain} >
                  <Text style={{fontSize:15,fontWeight:"600"}}>{val.title}</Text>
                  <Text style={{color:"#a0a0a0"}}>{val.desc  }</Text>
                </View>
                <View style={styles.popularCardFooter}>
                  <View style={styles.plusView} ><Feather name={val.iconName2} style={{fontSize:16}} /></View>
                  <View style={{width:35,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}} >
                    <Icons name="star" />
                    <Text>{val.star}</Text>
                  </View>
                  <View style={styles.popularCardRight} >
                    <Image 
                      source={val.src}
                      style={styles.popularCardRightImg}
                    />
                  </View>
                </View>  
              </View>
            </TouchableOpacity>

          ))
        }
      </View>
      </View>
      {/* Main Ends here */}
    </ScrollView>
  )
}

export default Home;

const styles = StyleSheet.create({
  body:{
    flex:1,
    paddingLeft:12,
    backgroundColor:"#E5E5E5"
  },
  header:{
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-between",
    // backgroundColor:"yellow",
    height:80,
    paddingTop:20,
    paddingRight: 12,
    marginBottom:20,
    alignItems:"center"
  },
  main:{
    // backgroundColor:"gray"
  },
  titile:{
    color:"#404040",
    fontFamily:"Montserrat"
  },
  Heading:{
    fontWeight:"bold",
    fontSize:23,
    marginTop:0,
    marginBottom:15,
    fontFamily:"lucida grande,tahoma, verdana, arial, sans-serif"
  },
  searchSection:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    paddingRight:5
  },
  InputSearch:{
    width:"93%",
    paddingBottom:2,
    fontSize:16,
    borderBottomWidth:2,
    borderBottomColor:"#b0b0b0",
    paddingHorizontal:5
  },
  popular:{
    marginTop:25,
  },
  popularCard:{
    width:"96.5%",
    height:161,
    backgroundColor:"#fff", 
    borderRadius:25,
    marginVertical:11,
    display:"flex",
    justifyContent:"space-between",
    alignItems:"flex-start",
    borderBottomLeftRadius:20,
    overflow:"hidden",
    shadowColor:"#000",
    shadowOffset:{
        width:4,
        height:2
    },
    shadowOpacity:8,
    shadowRadius:8,
    elevation:2
  },
  first:{
    // backgroundColor:"green",
    width:"37%",
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
    marginLeft:20,
    marginTop:20
  },
  popularCardMain:{
marginLeft:20
  },
  popularCardFooter:{
    // backgroundColor:"green",
    width:"100%",
    flex:0.51,
    flexDirection:"row",
    alignItems:"center",
  },
  plusView:{
    backgroundColor:"#F5CA48",
    width:90,
    height:53,
    alignItems:"center",
    justifyContent:"center",
    borderTopRightRadius:30,
    borderBottomLeftRadius:20,
    marginRight:30
  },
  popularCardRightImg:{
    position:"absolute",
    width:215,
    height:125,
    resizeMode:"contain"
    
  },
  popularCardRight:{
    position:"absolute",
    left:"54%",
    top:-100
  }
})

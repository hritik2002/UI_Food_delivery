import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import {
    Text , View , StyleSheet , Image , FlatList ,TouchableOpacity ,ScrollView
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'

const Details = ({route,navigation})=>{
    const {item} = route.params;

    return(
        <ScrollView style={{backgroundColor:"#ececec",height:"100%"}} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={()=> navigation.navigate("Home")}
                >
                    <View style={styles.headerLeft}>
                    <Icons name="chevron-left" style={{color:"#000",alignSelf:"center"}} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.headerRight}>
                    <Icons name="star" style={{color:"#fff"}} />
                    </View>
                </TouchableOpacity>
                
            </View>

            <View style={styles.main}>
                        <Text style={styles.title} >{item.title}</Text>
                        <Text style={styles.price} >{'\u20B9'}{item.price}</Text>
                <View style={styles.mainFirst}>
                    <View style={styles.left}>

                        <Text style={{color:"#CDCDCD",fontSize:14}}  >Size</Text>
                        <Text style={styles.desc} >{item.sizeName}</Text>

                        <Text style={{color:"#CDCDCD",fontSize:14}}  >Crust</Text>
                        <Text style={styles.desc} >{item.crust}</Text>

                        <Text style={{color:"#CDCDCD",fontSize:14}}  >Size</Text>
                        <Text style={styles.desc} >{item.diliveryTime}</Text>
                    </View>
                    <View style={styles.right}>
                        <Image
                            source={item.src}
                            style={styles.mainFirstImg}
                        />
                    </View>
                </View>

                <View style={styles.ingredients}>
                    <Text style={{fontWeight:"bold",fontSize:17,marginBottom:20}}>Ingredients</Text>
                    <FlatList 
                        data={item.ingredients}
                        renderItem={(val)=>(
                            <View style={styles.ingredientsChild} >
                                <Image
                                    source={val.item.image}
                                    style={styles.img}
                                />
                            </View>
                        )}
                        keyExtractor={(item)=>item.id}
                        horizontal
                    />
                </View>
                <TouchableOpacity
                    onPress={()=>alert("Your order has been placed!")}
                >
                    <View style={styles.footer}>
                        <Text>
                            <Text style={{fontSize:15,fontWeight:"bold"}}>Place an order    </Text>
                            <Icons name="chevron-right" style={{color:"#000",alignSelf:"center"}} />
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Details;

const styles = StyleSheet.create({
    header:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // borderColor:"#000",
        // borderWidth:2,
        marginTop:25,
        marginBottom:30,
        marginHorizontal:12,
        // position:"sticky"

    },
    headerLeft:{
        paddingVertical:13.4,
        paddingHorizontal:15,
        backgroundColor:"#ececec",
        borderWidth:2,
        borderRadius:8,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        backgroundColor:"#fff",
        borderWidth:2,
        borderColor:"#a0a0a0",
        borderRadius:8,
        
    },
    headerRight:{
        padding:13.4,
        paddingHorizontal:15,
        backgroundColor:"#F5CA48",
        borderWidth:2,
        borderColor:"#F5CA48",
        borderRadius:8,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        
    },
    main:{
        paddingLeft:20,
        overflow:"hidden"
    },
    mainFirst:{
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"yellow",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:40

    },
    right:{
        overflow:"hidden",
        padding:10,
        width:320
    },
    mainFirstImg:{
        resizeMode:"contain",
        marginLeft:20,
        width:300
    },
    ingredients:{

    },
    title:{
        fontSize:32,
        width:185,
        fontWeight:"bold",
        marginBottom:10,
        // backgroundColor:"blue"
    },
    price:{
        fontSize:32,
        // backgroundColor:"green",
        width:180,
        fontWeight:"bold",
        marginBottom:25,
        color:"#E4723C"
    },
    desc:{
        color:"#000",
        fontSize:16,
        fontWeight:"800",
        marginBottom:14
    },
    ingredientsChild:{
        width:100,
        height:80,
        backgroundColor:"#FFF",
        alignItems:"center",
        justifyContent:"center",
        marginRight:15,
        borderRadius:8,
        shadowColor:"#000",
        shadowOffset:{
            width:2,
            height:2
        },
        shadowOpacity:8,
        shadowRadius:7,
        elevation:2
        
    },
    img:{
        width:80,
        height:80,
        resizeMode:"contain"
    },
    footer:{
        flex:1,
        height:58,
        backgroundColor:"#F5CA48",
        alignItems:"center",
        justifyContent:"center",
        width:"95%",
        borderRadius:50,
        marginTop:60,
        marginBottom:20
    }
})
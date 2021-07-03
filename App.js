import 'react-native-gesture-handler';
import React from 'react'
import {
  Text , View , StyleSheet , ScrollView , StatusBar , TextInput , FlatList
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screen/Home'
import Details from './screen/Details';

const Stack = createStackNavigator();

const App=()=>{

  return(
    <>
       <NavigationContainer>
         <Stack.Navigator initialRouteName={Home} >
            <Stack.Screen name="Home" component={Home}
            options={{
              headerShown:false
            }}
          />
          
          <Stack.Screen name="Details" component={Details} options={{
            headerShown:false
          }}/> 
         </Stack.Navigator>
       </NavigationContainer>
    </>
  )
}

export default App;


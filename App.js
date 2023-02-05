// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

 import React from "react";
 import { NavigationContainer } from "@react-navigation/native";
 import NYTimesArticles from "./Screens/NYTimesArticles";
 import NYTimesArticlesDetails from "./Screens/NYTimesArticleDetail";
 import { Header } from "./Components/Header";
 import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import Icon from 'react-native-vector-icons/Entypo';
 import { View} from "react-native";

 const Stack = createNativeStackNavigator();
  
export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        component={NYTimesArticles} 
        name="NYTimesArticles" 
        options={{
          headerTitle: () => <Header name="NY Times Most Popular" />, 
          headerLeft:() => <Icon name="menu" size={30} color="#900" />  ,
          headerRight:() => <View style={{flexDirection: "row",justifyContent: "space-evenly",width: 70}}>
                    <Icon name="magnifying-glass" size={30} color="#900" />
                    <Icon name="dots-three-vertical" size={30} color="#900" />
                  </View>,

          headerStyle: {
            backgroundColor: '#00d8c9',
            height: 100,
          }
        }}
      />
      <Stack.Screen 
        component={NYTimesArticlesDetails} 
        name="NYTimesArticlesDetails"
        options={{
          headerTitle: () => <Header name="NY Times Articles Details" />,
          headerStyle: {
            backgroundColor: '#00d8c9',
            height: 100,
          }
        }}
      />

</Stack.Navigator>
</NavigationContainer>
  );
 }
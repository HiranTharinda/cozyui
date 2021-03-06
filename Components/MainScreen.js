import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
    } from "react-native";
import {Icon, Title} from 'native-base'
import {
    createDrawerNavigator,
    createStackNavigator,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
    BottomTabBar,
} from 'react-navigation';
import CamTab from './AppTabNavigator/CamTab'
import HomeTab from './AppTabNavigator/HomeTab'
import PostTab from './AppTabNavigator/PostTab'
import ProfileTab from './AppTabNavigator/ProfileTab'
import SearchTab from './AppTabNavigator/SearchTab'


class MainScreen extends Component{
    static navigationOptions = {
        title: 'C O Z Y',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:"center", 
        flex:1  
        },
    };
    

    render(){
        return(
            <AppTabNavigator/>
        )
    }
}

export default MainScreen;


const BottomTabNavigator = createMaterialTopTabNavigator({
    HomeTab:{
        screen: HomeTab
    },
    SearchTab:{
        screen: SearchTab
    },
    CamTab:{
        screen: CamTab
    },
    PostTab:{
        screen: PostTab
    },
    ProfileTab:{
        screen: ProfileTab
    }
    
},{     
        tabBarPosition:'bottom',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#000000',
            inactiveTintColor:'#c8d6e5',
            showIcon: true,
            style:{elevation:100, backgroundColor: 'white',}
    }

});

const AppTabNavigator = createAppContainer(BottomTabNavigator);

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});
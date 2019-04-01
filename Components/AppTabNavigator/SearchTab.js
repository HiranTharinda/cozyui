import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    } from "react-native";
import { SearchBar } from 'react-native-elements'
import {Icon, Content, Container, Header, Left, Body, Right, Button} from 'native-base'

var images = [
        require('../../assets/feed_images/1.jpg'),
        require('../../assets/feed_images/2.jpg'),
        require('../../assets/feed_images/3.jpg'),
        require('../../assets/feed_images/4.jpg'),
        require('../../assets/feed_images/5.jpg'),
        require('../../assets/feed_images/6.jpg'),
        require('../../assets/feed_images/7.jpg'),
        require('../../assets/feed_images/8.jpg'),
        require('../../assets/feed_images/9.jpg'),
        require('../../assets/feed_images/10.jpg'),
        require('../../assets/feed_images/11.jpg'),
        require('../../assets/feed_images/12.jpg'),
    ] 

class SearchTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name = "ios-search" style={{color:
            tintColor}}/>
        ) 
    }


    render(){
        return(
            <Container>
                <SearchBar
                    
                    icon={{ type: 'font-awesome', name: 'search' }}
                placeholder='Type Here...' />
            </Container>
        );
    }
}

export default SearchTab;


const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});
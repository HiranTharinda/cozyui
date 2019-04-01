import React, { Component } from "react";
// import Expo from 'expo';
// import ExpoTHREE, { THREE } from 'expo-three';
// import ExpoGraphics from 'expo-graphics';
import {
    View,
    Text,
    StyleSheet
    } from "react-native";

    import {Icon} from 'native-base'

console.disableYellowBox=true;

class CamTab extends Component{

    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name = "ios-aperture" style={{color:
            tintColor}}/>
        ) 
    };

    // onContextCreate = async ({gl, scale, width, height, arSession}) => {
    //     //initialize renderer
    //     this.renderer = ExpoTHREE.createRenderer({gl});
    //     this.renderer.setPixelRatio(scale);
    //     this.renderer.setSize(width, height);

    //     //initialize scene
    //     this.scene = new THREE.Scene();
    //     this.scene.background = ExpoTHREE.createARBackgroundTexture(arSession, this.renderer);

    //     //initialize camera
    //     this.camera = ExpoTHREE.createARCamera(arSession, width / scale, height / scale, 0.01, 1000);

    // }

    // onRender = (delta) => {
    //     this.renderer.render(this.scene, this.camera);
    // }

    render(){
        return(
            <View style ={{flex:1}}>
            <Text>Cam</Text>
                {/* <ExpoGraphics.View style = {{flex:1}}
                onContextCreate={this.onContextCreate}
                onRender = {this.onRender}
                arEnabled={true}/> */}
            </View>
        );
    }
}

export default CamTab;


const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
    }
});


import React, { Component } from 'react';
import { Image, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { REMOTE_BACKGROUND, RESIZE_MODE } from './../constants';

class ResultScreen extends Component {
    constructor(props) {
        super(props);
    }

    changeScreen = () => {
        this.props.navigation.navigate("Home");
    };

    render() {
        return(
            <ImageBackground
                source={{uri: REMOTE_BACKGROUND}}
                style={{width: 400, height: 700}}
            >
                <TouchableOpacity  style={{ flex: 1, flexDirection: 'row', alignItems: 'center', width: 30, height: 30,
                    backgroundColor: 'black'}} onPress={() => this.changeScreen()}>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 32,
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                        }}
                    > Go to Home </Text>
                </TouchableOpacity>
                <Image source={{uri: props.image}} />
            </ImageBackground>
        )
    }
}

export default ResultScreen;
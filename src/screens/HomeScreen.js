import React, { Component } from 'react'
import { Alert, Button, View, Image, StatusBar, ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types'
import ImagePicker from 'react-native-image-picker'
import {REMOTE_BACKGROUND, RESIZE_MODE} from "../constants";

const BackgroundImage = (props) => {
    return (
        <View>
            <Image
                style={{
                    flex: 1,
                    resizeMode: RESIZE_MODE,
                    width: 100,
                    height:100
                }}
                source={{ uri: REMOTE_BACKGROUND }}
            />
            { props.children }
        </View>
    );
};

const myButton = ({onPress}) => (
    <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={onPress}>
        Login with Facebook
    </Icon.Button>
);

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
        };

        this._onClick = this._onClick.bind(this);
    }

    _onClick() {
        const options = {
            title: 'Title',
            takePhotoButtonTitle: 'Take photo',
            chooseFromLibraryButtonTitle: 'Choose from your Gallary',
            cancelButtonTitle: 'Cancel',
            cameraType: 'back',
            mediaType: 'photo',
            storageOptions: {
                skipBackup: true,
                path: 'foodgasm'
            }
        };

        this.setState({ isLoading: true });
        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                this.setState({ isLoading: false });
            } else if (response.error) {
                Alert.alert('Error', 'Missing permissions.', { cancelable: false });
                this.setState({ isLoading: false });
            } else {
                const { navigate } = this.props.navigation;
                navigate('Prediction', { image: response });
                this.setState({ isLoading: false });
            }
        })
    }

    render() {
        const name = "ios-person";
        return (
            <View>
                <StatusBar hidden />
                <BackgroundImage>
                    {
                        !this.state.isLoading ?
                            <View stype={{flex: 1, alignItems: 'center', flexDirection: 'row'}}>
                                <Button
                                    title='Pick image'
                                    onPress={this._onClick}
                                />
                                { Icon.hasIcon(name) && (
                                    <Icon
                                        style={{width: 100, height: 100, paddingTop: 50, alignContent:'center'}}
                                        onPress={this._onClick}
                                        size={40}
                                        name={name}
                                    />
                                )}
                            </View>
                            : <ActivityIndicator size="large" color="#e74c3c" />
                    }
                </BackgroundImage>
            </View>
        )
    }
}

HomeScreen.propTypes = {
    navigation: PropTypes.object,
};

export default HomeScreen
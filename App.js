import React, { Fragment } from 'react';
import { Image, Button, View, Text , ImageBackground} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {REMOTE_BACKGROUND} from "./src/constants";
import HomeScreen from "./src/screens/HomeScreen";
import ResultScreen from "./src/screens/ResultScreen"; // Version can be specified in package.json

class HomeScreen1 extends React.Component {
    render() {
        return (
            <Fragment>
                <ImageBackground
                    source={{uri: REMOTE_BACKGROUND}}
                    imageStyle={{resizeMode: 'stretch'}}
                    style={{width: 400, height: 400}}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
                </View>
            </Fragment>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Prediction: {
            screen: ResultScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
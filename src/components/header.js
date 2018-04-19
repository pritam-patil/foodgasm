import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import {
    APP_NAME,
    REMOTE_BACKGROUND,
    RESIZE_MODE
} from "../constants";

const Header = () => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: '#eee',
            }}
        >
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
                <Image
                    style={{
                        flex: 1,
                        resizeMode: RESIZE_MODE,
                    }}
                    source={{ uri: REMOTE_BACKGROUND }}
                />
            </View>
            <View
                style={{
                    marginTop: 25,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    paddingLeft: 15,
                }}
            >
                <Text
                    style={{
                        color: 'purple',
                        textAlign: 'center',
                        fontSize: 32,
                        fontFamily: 'monospace',
                        fontWeight: 'bold'
                    }}
                >
                    {APP_NAME}
                </Text>
            </View>
        </View>
    );
};

export default Header;
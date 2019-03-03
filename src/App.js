import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCw67qdJftGPW6A3tK8wg2xT8BT_NsniZY',
            authDomain: 'auth-react-native-70921.firebaseapp.com',
            databaseURL: 'https://auth-react-native-70921.firebaseio.com',
            projectId: 'auth-react-native-70921',
            storageBucket: 'auth-react-native-70921.appspot.com',
            messagingSenderId: '707904836855'
        })
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <Text>An App</Text>
            </View>
        );
    }
}

export default App;
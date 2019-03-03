import React, { Component } from 'react';
import { View } from 'react-native';
import Constants from './constants';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: Constants.apiKey,
            authDomain: Constants.authDomain,
            databaseURL: Constants.databaseURL,
            projectId: Constants.projectId,
            storageBucket: Constants.storageBucket,
            messagingSenderId: Constants.messagingSenderId
        })
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;
import React, { Component } from 'react';
import { View } from 'react-native';
import Constants from './constants';
import firebase from 'firebase';
import { CardSection, Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: Constants.apiKey,
            authDomain: Constants.authDomain,
            databaseURL: Constants.databaseURL,
            projectId: Constants.projectId,
            storageBucket: Constants.storageBucket,
            messagingSenderId: Constants.messagingSenderId
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()} >
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />
            default:
                return <Spinner/>
        }
    }
    
    render() {
        return (
            <View >
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
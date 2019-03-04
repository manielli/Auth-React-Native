import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: 'Authentication Failed.'});
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        value={this.state.email}
                        label="Email"
                        onChangeText={email => this.setState({ email })}
                        placeholder='user@emailaddress.com' 
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        value={this.state.password}
                        label="Password"
                        onChangeText={password => this.setState({ password })}
                        placeholder='password'
                        secureTextEntry={true}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle} >{this.state.error}</Text>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)} >
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'centre',
        color: 'red'
    }
};

export default LoginForm;
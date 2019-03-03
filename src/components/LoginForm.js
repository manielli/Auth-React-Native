import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput 
                        value={this.state.text}
                        onChangeText={text => this.setState({ text: text})}
                        style={{ height: 25, width: 250 }}
                        placeholder='Enter your email here' 
                    />
                </CardSection>
                
                <CardSection>

                </CardSection>
                
                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
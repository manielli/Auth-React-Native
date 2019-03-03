import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        value={this.state.text}
                        label="Email"
                        onChangeText={text => this.setState({ text: text})}
                        inputPlaceHolder='Enter your email here' 
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
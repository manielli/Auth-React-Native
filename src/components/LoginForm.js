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
                        onChangeText={text => this.setState({ text: text})}
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
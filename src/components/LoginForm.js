import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

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
import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label }) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput 
                style={{ height: 25, width: 250}}
            />
        </View>
    );
};

export { Input };
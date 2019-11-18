import React from 'react';
import {View, ScrollView, TextInput, Text} from 'react-native';
import {Button, Card} from 'react-native-elements';

class Register extends React.Component{

    render(){
        return(
            <ScrollView>
                <View style={{marginTop:50}}>
                    <Card title='Registrate Chef'>
                        <Text>
                            Con tan solo unos datos básicos podrás registrarte. 
                        </Text>
                        <Button
                            buttonStyle={{borderRadius: 0, marginTop: 20, marginLeft: 0, marginRight: 0, marginBottom: 20}}
                            title='Registrate' />
                    </Card>
                </View>
            </ScrollView>
        );
    }
}

export default Register;
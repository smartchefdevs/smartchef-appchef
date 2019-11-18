import React from 'react';
import {ScrollView, View, TextInput, Text} from 'react-native';
import { Card, Button, Avatar} from 'react-native-elements';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            mail:"",
            pass:""
        }
    }

    render(){
        return(
            <ScrollView>
                <View style={{marginTop:50}}>
                    <Card
                        title='Ingresa Chef'
                    >
                        <View style={{justifyContent:'center',alignItems:'center', marginTop:20,marginBottom:20}}>
                            <Avatar
                                width={80}
                                height={80}
                                rounded
                                source={require('../../resources/imgs/general/chef.png')}
                                activeOpacity={0.7}
                            />
                        </View>
                        <TextInput
                            style={{marginTop:10,marginBottom:10}}
                            placeholder="Correo"
                            keyboardType="email-address"
                            returnKeyType ="next"
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            onChangeText={(text) => this.setState({mail:text})}
                        />
                        <TextInput
                            style={{marginTop:10,marginBottom:10}}
                            placeholder="Contraseña"
                            secureTextEntry={true}
                            ref={(input) => { this.secondTextInput = input; }}
                            onChangeText={(text) => this.setState({pass:text})}
                        />
                        <Button
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='Ingresa' />
                    </Card>
                    <View style={{justifyContent:'center',alignItems:'center', marginTop:30,marginBottom:20}}>
                        <Text>
                            ¿No tienes cuenta?
                        </Text>
                    </View>
                    <Button
                        buttonStyle={{backgroundColor:'#FF5733',borderRadius: 0, marginLeft: 10, marginRight: 10, marginBottom:10}}
                        title='Registrate aquí'
                        onPress={()=>{this.props.navigation.navigate('Register')}}    
                    />
                </View>
            </ScrollView>
        );
    }
}

export default Login;

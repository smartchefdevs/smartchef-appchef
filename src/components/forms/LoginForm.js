import React from 'react';
import {View, TextInput, Button, Alert, ActivityIndicator} from 'react-native';
import LocalStorage from '../../utils/LocalStorage';

import AuthService from '../../service/AuthService';

class FormLogin extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loadingLogin: false,
            mail:"",
            pass:""
        };

        this.service = new AuthService();
        this.storage = new LocalStorage();
    }

    login = ()=>{
        var credentials = {
            mail: this.state.mail,
            pass: this.state.pass
        };

        if(this.validateCredentials(credentials)){
            this.setState({loadingLogin:true});
            this.service.login(credentials, 
                (user)=>{{this.success(user)}}, 
                (msg)=>{{this.error(msg)}}
            );
        }
    }

    render(){
        return(
            <View>
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Correo"
                    keyboardType="email-address"
                    returnKeyType ="next"
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    onChangeText={(text) => this.setState({mail:text})} />
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    ref={(input) => { this.secondTextInput = input; }}
                    onChangeText={(text) => this.setState({pass:text})} />
                {this.renderButton()}
            </View>
        );
    }

    renderButton = ()=>{
        if(!this.state.loadingLogin){
            return this.buildLoginButton();
        } else {
            return this.buildSpinner();
        }
    }

    buildSpinner = ()=>{
        return(
            <ActivityIndicator size={30} color="#000" />
        );
    }

    buildLoginButton = ()=>{
        return(
            <Button
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='Ingresa' 
                onPress={this.login}/>
        );
    }

    validateCredentials = (credentials)=>{
        if(credentials.mail == null || credentials.mail == ""){
            this.launchAlert("Correo vacío");
            return false;
        } else if(credentials.pass == null || credentials.pass == ""){
            this.launchAlert("Contraseña vacía");
            return false;
        } else {
            return true;
        }
    }

    /**
     * Method to execute when fetch and the response is OK
     */
    success = async (json)=>{
        await this.storage.removeItem(this.storage.USER_ID);
        if(await this.storage.saveData(this.storage.USER_ID,{id:json.user.id})){
            this.launchAlert("Bienvenido " + json.user.full_name);
            this.setState({loadingLogin:false});
            this.props.navigation.replace('Home');
        } else {
            this.launchAlert("Hubo un error interno");
            this.setState({loadingLogin:false});
        }
    }

    /**
     * Method to execute when fetch and the response is ERROR
     */
    error = (msg)=>{
        this.launchAlert(msg);
        this.setState({loadingLogin:false});
    }

    /**
     * When react-native-fash-message implemented
     */
    launchAlert = (msg)=>{
        Alert.alert(msg);
    }

}

export default FormLogin;
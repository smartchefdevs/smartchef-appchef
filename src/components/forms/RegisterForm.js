import React from 'react';
import {View, TextInput, ActivityIndicator, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import UserService from '../../service/UserService';

class RegisterForm extends React.Component{

    id_profile= 2;

    constructor(props){
        super(props);
        this.state = {
            loadingFetch: false,
            full_name: "",
            mail: "",
            address: "",
            pass: ""
        }
        this.service = new UserService();
    }

    register = ()=>{
        var inputs = {
            full_name: this.state.full_name,
            mail: this.state.mail,
            address: this.state.address,
            pass: this.state.pass,
            id_profile: this.id_profile
        }
        if(this.validateForm(inputs)){
            this.setState({loadingFetch: true})
            this.service.register(inputs,
                (json)=>{{this.success(json)}},
                (error) =>{{this.error(error)}})
        }
    }

    render(){
        return(
            <View>
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Nombre"
                    keyboardType="email-address"
                    returnKeyType ="next"
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    onChangeText={(text) => this.setState({full_name:text})} />
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Correo"
                    keyboardType="email-address"
                    returnKeyType ="next"
                    ref={(input) => { this.secondTextInput = input; }}
                    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    onChangeText={(text) => this.setState({mail:text})} />
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Dirección"
                    keyboardType="email-address"
                    returnKeyType ="next"
                    ref={(input) => { this.thirdTextInput = input; }}
                    onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                    onChangeText={(text) => this.setState({address:text})} />
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    ref={(input) => { this.fourthTextInput = input; }}
                    onChangeText={(text) => this.setState({pass:text})} />
                {this.renderButton()}
            </View>
        );
    }

    renderButton = ()=>{
        if(!this.state.loadingFetch){
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
                buttonStyle={{borderRadius: 0, marginTop: 20, marginLeft: 0, marginRight: 0, marginBottom: 20}}
                title='Registrate' 
                onPress={this.register}/>
        );
    }

    validateForm = (inputs)=>{
        if(inputs.full_name == null || inputs.full_name == ""){
            this.launchAlert("Nombre vacío");
            return false;
        } else if(inputs.mail == null || inputs.mail == ""){
            this.launchAlert("Correo vacío");
            return false;
        } else if(inputs.pass == null || inputs.pass == ""){
            this.launchAlert("Contraseña vacía");
            return false;
        } else {
            return true;
        }
    }

    /**
     * Method to execute when fetch and the response is OK
     */
    success = (json)=>{
        this.launchAlert(json.msg);
        this.setState({loadingFetch:false});
    }

    /**
     * Method to execute when fetch and the response is ERROR
     */
    error = (msg)=>{
        this.launchAlert(msg);
        this.setState({loadingFetch:false});
    }

    /**
     * When react-native-fash-message implemented
     */
    launchAlert = (msg)=>{
        Alert.alert(msg);
    }
}

export default RegisterForm;
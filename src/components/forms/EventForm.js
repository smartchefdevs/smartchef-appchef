import React from 'react';
import {View, TextInput, ActivityIndicator, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import EventService from '../../service/EventService';
import LocalStorage from '../../utils/LocalStorage';

class EventForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loadingFetch:false,
            name:'',
            description:'',
            price:'',
            address:''
        }
        this.storage = new LocalStorage();
        this.service = new EventService();   
    }

    create = async ()=>{
        var idChef = (await this.storage.getData(this.storage.USER_ID)).id;
        var inputs = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            address: this.state.address,
            id_chef: idChef,
            id_state: 1,
            lat_addr:23.98,
            lon_addr:78.65
        }
        if(this.validateForm(inputs)){
            this.setState({loadingFetch: true})
            this.service.create(inputs,
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
                    onChangeText={(text) => this.setState({name:text})} />
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Descrpción"
                    keyboardType="email-address"
                    returnKeyType ="next"
                    ref={(input) => { this.secondTextInput = input; }}
                    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    onChangeText={(text) => this.setState({description:text})} />
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Precio"
                    keyboardType='decimal-pad'
                    returnKeyType ="next"
                    ref={(input) => { this.thirdTextInput = input; }}
                    onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                    onChangeText={(text) => this.setState({price:text})} />
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Dirección"
                    keyboardType="email-address"
                    ref={(input) => { this.fourthTextInput = input; }}
                    onChangeText={(text) => this.setState({address:text})} />
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
                title='Crear' 
                onPress={this.create}/>
        );
    }

    validateForm = (inputs)=>{
        if(inputs.name == null || inputs.name == ""){
            this.launchAlert("Nombre vacío");
            return false;
        } else if(inputs.description == null || inputs.description == ""){
            this.launchAlert("Descripción vacía");
            return false;
        } else if(inputs.price == null || inputs.price == ""){
            this.launchAlert("Precio vacío");
            return false;
        } else if(inputs.price < 0){
            this.launchAlert("Precio no puede ser menor a cero");
            return false;
        } else if(inputs.address == null || inputs.address == ""){
            this.launchAlert("Dirección vacía");
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

export default EventForm;
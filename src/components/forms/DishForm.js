import React from 'react';
import {View, TextInput, ActivityIndicator, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import EventService from '../../service/EventService';
import LocalStorage from '../../utils/LocalStorage';

class DishForm extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loadingFetch:false,
            name:'',
            description:'',
        }
        this.storage = new LocalStorage();
        this.service = new EventService();  
        this.id_state = 1;
        this.id_category = 1;
        this.id_event = props.navigation.getParam('idEvent', 0);
    }

    create = ()=>{
        var inputs = {
            name: this.state.name,
            description: this.state.description,
            id_state: this.id_state,
            id_category:this.id_category,
            id_event:this.id_event
        }
        if(this.validateForm(inputs)){
            this.setState({loadingFetch: true})
            this.service.addDish(inputs,
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
                    placeholder="Descripción"
                    keyboardType="email-address"
                    ref={(input) => { this.secondTextInput = input; }}
                    onChangeText={(text) => this.setState({description:text})} />
                {this.renderButton()}
            </View>
        );
    }

    renderButton = ()=>{
        if(this.state.loadingFetch){
            return this.buildSpinner();
        } else {
            return this.buildCreateButton();
        }
    }

    buildSpinner = ()=>{
        return(
            <ActivityIndicator size={30} color="#000" />
        );
    }

    buildCreateButton = ()=>{
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

export default DishForm;
import React from 'react';
import {View, TextInput, ActivityIndicator, Alert} from 'react-native';
import {Button} from 'react-native-elements';
import EventService from '../../service/EventService';
import LocalStorage from '../../utils/LocalStorage';
import ActionConfig from '../../config/ActionConfig';

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
        this.id_state = 1;
        this.lat_addr = 23.98;
        this.lon_addr = 78.65;
    }

    componentDidMount(){
        if(this.props.action == ActionConfig.EDIT)
            this.loadEvent();        
        
    }

    loadEvent = ()=>{
        console.log(`TYPE: ${this.props.action}`);
        this.service.eventById(this.props.idEvent,
            (json) =>{{this.successLoadEvent(json)}},
            (error) =>{{this.error(error)}});
    }

    create = async ()=>{
        var idChef = (await this.storage.getData(this.storage.USER_ID)).id;
        var inputs = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            address: this.state.address,
            id_chef: idChef,
            id_state: this.id_state,
            lat_addr:this.lat_addr,
            lon_addr:this.lon_addr
        }
        if(this.validateForm(inputs)){
            this.setState({loadingFetch: true})
            this.service.create(inputs,
                (json)=>{{this.success(json)}},
                (error) =>{{this.error(error)}})
        }
    }

    update = async ()=>{
        var idChef = (await this.storage.getData(this.storage.USER_ID)).id;
        var inputs = {
            id: this.props.idEvent,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            address: this.state.address,
            id_chef: idChef,
            id_state: this.id_state,
            lat_addr:this.lat_addr,
            lon_addr:this.lon_addr
        }
        if(this.validateForm(inputs)){
            this.setState({loadingFetch: true})
            this.service.update(inputs,
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
                    value={this.state.name}
                    onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    onChangeText={(text) => this.setState({name:text})} />
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Descrpción"
                    keyboardType="email-address"
                    returnKeyType ="next"
                    value={this.state.description}
                    ref={(input) => { this.secondTextInput = input; }}
                    onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    onChangeText={(text) => this.setState({description:text})} />
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Precio"
                    keyboardType='decimal-pad'
                    returnKeyType ="next"
                    value={this.state.price}
                    ref={(input) => { this.thirdTextInput = input; }}
                    onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                    onChangeText={(text) => this.setState({price:text})} />
                <TextInput
                    style={{marginTop:10,marginBottom:10}}
                    placeholder="Dirección"
                    keyboardType="email-address"
                    value={this.state.address}
                    ref={(input) => { this.fourthTextInput = input; }}
                    onChangeText={(text) => this.setState({address:text})} />
                {this.renderButton()}
            </View>
        );
    }

    renderButton = ()=>{
        if(this.state.loadingFetch){
            return this.buildSpinner();
        } else if(this.props.action == ActionConfig.CREATE){
            return this.buildCreateButton();
        } else if(this.props.action == ActionConfig.EDIT){
            return this.buildEditButton();
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

    buildEditButton = ()=>{
        return(
            <Button
                buttonStyle={{borderRadius: 0, marginTop: 20, marginLeft: 0, marginRight: 0, marginBottom: 20}}
                title='Editar' 
                onPress={this.update}/>
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

    successLoadEvent = (json)=>{
        this.setState({name:json.data.name});
        this.setState({description:json.data.description});
        this.setState({price:json.data.price});
        this.setState({address:json.data.address});
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
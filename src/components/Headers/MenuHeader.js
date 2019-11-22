import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Card, Avatar, Divider} from 'react-native-elements';
import ImgConfig from '../../config/ImgConfig';
import UserService from '../../service/UserService';
import LocalStorage from '../../utils/LocalStorage';

class MenuHeader extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loadedData: false,
            user:{}
        }
        this.service = new UserService();
        this.storage = new LocalStorage();
    }

    componentDidMount(){
        this.loadUser();
    }

    loadUser = async ()=>{
        var idUser = (await this.storage.getData(this.storage.USER_ID)).id;
        console.log(idUser);
        this.service.getById(idUser,(json)=>{{this.success(json)}},(error)=>{{this.error(error)}});
    }

    render(){
        return(
            <Card containerStyle={{marginTop: 5,width:'90%'}}>
                <View style={{width:'100%',alignItems:'center',padding:20,justifyContent:'center', flexDirection:'row'}}>
                    <Avatar rounded
                        size="large"
                        containerStyle={{flexDirection:'column'}}
                        source={{
                            uri:
                            ImgConfig.users + 'dagoberto.png',
                        }} />
                    <View style={{justifyContent:'center',alignItems:'center',marginLeft:40,flexDirection:'column'}}>
                        <Text style={{color: '#000',fontSize:17}}>Nombre</Text>
                        <Text style={{color: '#000', marginTop:3,fontSize:12}}>Correo</Text>
                    </View>
                </View>
            </Card>
        );
    }

    renderInfo = ()=>{
        if(this.state.loadedData && this.state.user.length != 0){
            return(
                <View style={{width:'100%',alignItems:'center',padding:20,justifyContent:'center', flexDirection:'row'}}>
                    <Avatar rounded
                        size="large"
                        containerStyle={{flexDirection:'column'}}
                        source={{
                            uri:
                            ImgConfig.users + 'dagoberto.png',
                        }} />
                    <View style={{justifyContent:'center',alignItems:'center',marginLeft:40,flexDirection:'column'}}>
                        <Text style={{color: '#000',fontSize:17}}>Nombre</Text>
                        <Text style={{color: '#000', marginTop:3,fontSize:12}}>Correo</Text>
                    </View>
                </View>
            );
        }        
    }

    success = (json)=>{
        console.log(json.msg.id);
        this.setState({loadUser:true});
        this.setState({user:json.msg});
    }

    /**
     * Method to execute when fetch and the response is ERROR
     */
    error = (msg)=>{
        this.launchAlert(msg);
        this.setState({loadedData:true});
    }

    /**
     * When react-native-fash-message implemented
     */
    launchAlert = (msg)=>{
        Alert.alert(msg);
    }
}

export default MenuHeader;
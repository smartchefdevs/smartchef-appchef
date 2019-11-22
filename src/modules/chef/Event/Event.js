import React from 'react';
import {ScrollView,View, ActivityIndicator, Button, Alert} from 'react-native';
import MainHeader from '../../../components/Headers/MainHeader';
import HeaderEvents from '../../../components/Headers/HeaderEvents';
import EventCard from '../../../components/Cards/EventCard';
import LocalStorage from '../../../utils/LocalStorage';
import EventService from '../../../service/EventService';

class Event extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loadedEvents:false,
            events:[]
        }
        this.storage = new LocalStorage();
        this.service = new EventService();
    }

    componentDidMount(){
        this.loadEvents();
    }

    loadEvents = async ()=>{
        var idChef = (await this.storage.getData(this.storage.USER_ID)).id;
        this.service.eventsByChef(idChef,(json)=>{{this.success(json)}},(msg)=>{{this.error(msg)}});
    }

    render(){
        return(
            <View style={{flex:1}}>
                <MainHeader navigation={this.props.navigation} />
                <HeaderEvents title='Eventos' add={true} onpress={()=>{this.props.navigation.navigate('EventNew')}} />
                <ScrollView>
                    {this.renderEvents()}
                </ScrollView>
            </View>
        );
    }

    renderEvents = ()=>{
        if(!this.state.loadedEvents){
            return(
                <ActivityIndicator size={70} color="#000" />
            );
        } else if(this.state.events.length == 0){
            return(
                <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Text>Vaya, parece que no tienes eventos</Text>
                    <Button 
                        raised
                        title='Agregar'
                        buttonStyle={{backgroundColor:'green'}}
                    />
                </View>
            );
        } else {
            return(
                <View>
                    {this.state.events.map((event,key)=>{
                        return(
                            <EventCard 
                                key={key}
                                event={event}
                                />
                        );
                    })}
                </View>
            );
        }
    }

    success = (json)=>{
        this.setState({events:json.data});
        this.setState({loadedEvents:true});
    }

    /**
     * Method to execute when fetch and the response is ERROR
     */
    error = (msg)=>{
        this.launchAlert(msg);
        this.setState({loadedEvents:true});
    }

    /**
     * When react-native-fash-message implemented
     */
    launchAlert = (msg)=>{
        Alert.alert(msg);
    }
}

export default Event;
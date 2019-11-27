import React from 'react';
import {ScrollView,View, ActivityIndicator, Alert, Text} from 'react-native';
import MainHeader from '../../../components/Headers/MainHeader';
import HeaderEvents from '../../../components/Headers/HeaderEvents';
import DishCard from '../../../components/Cards/DishCard';
import LocalStorage from '../../../utils/LocalStorage';
import EventService from '../../../service/EventService';

class Dish extends React.Component{

    constructor(props){
        super(props);
        this.state={
            loadedDishes:false,
            dishes:[]
        }
        this.storage = new LocalStorage();
        this.service = new EventService();
        this.idEvent = props.navigation.getParam('idEvent', 0);
    }

    componentDidMount(){
        this.loadDishes();
    }

    loadDishes = ()=>{
        this.service.eventById(this.idEvent,
                (json)=>{{this.success(json)}},
                (msg)=>{{this.error(msg)}});
    }

    render(){
        return(
            <View style={{flex:1}}>
                <MainHeader navigation={this.props.navigation} />
                <HeaderEvents 
                    title='Platos' 
                    add={true} 
                    onpress={()=>{this.props.navigation.navigate('DishNew',{idEvent:this.idEvent})}} />
                <ScrollView>
                    {this.renderDishes()}
                </ScrollView>
            </View>
        );
    }

    renderDishes = ()=>{
        if(!this.state.loadedDishes){
            return(
                <ActivityIndicator size={70} color="#000" />
            );
        } else if(this.state.dishes.length == 0){
            return(
                <View style={{width:'100%',justifyContent:'center',alignItems:'center'}}>
                    <Text>Vaya, parece que no tienes platos</Text>
                </View>
            );
        } else {
            return(
                <View>
                    {this.state.dishes.map((dish,key)=>{
                        return(
                            <DishCard 
                                key={key}
                                dish={dish}
                                navigation={this.props.navigation}
                                />
                        );
                    })}
                </View>
            );
        }
    }

    success = (json)=>{
        this.setState({dishes:json.data.dishes});
        this.setState({loadedDishes:true});
    }

    /**
     * Method to execute when fetch and the response is ERROR
     */
    error = (msg)=>{
        this.launchAlert(msg);
        this.setState({loadedDishes:true});
    }

    /**
     * When react-native-fash-message implemented
     */
    launchAlert = (msg)=>{
        Alert.alert(msg);
    }
}

export default Dish;
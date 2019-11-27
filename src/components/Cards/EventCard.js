import React from 'react';
import {View,Text} from 'react-native';
import {Card, Avatar} from 'react-native-elements';
import ImgConfig from '../../config/ImgConfig';

const EventCard = (props)=>{
    return(
        <View style={{padding:10}}>
            <Card>
                <View style={{flexDirection:'row'}}>
                    <View style={{width:'30%',justifyContent:'center', justifyContent:'center',flexDirection:'column'}}>
                        <Avatar 
                            rounded
                            size="large"
                            source={{
                                uri:
                                ImgConfig.events + props.event.image_url,
                            }}/>
                    </View>
                    <View style={{width:'40%',justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                        <Text style={{marginBottom:10}}>{props.event.name}</Text>
                        <Text style={{marginBottom:10}}>$ {props.event.price}</Text>
                        <Text>{props.event.address}</Text>
                    </View>
                    <View style={{width:'30%',justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                        <Avatar 
                            rounded
                            source={require('../../resources/imgs/general/pencil-circle.png')}
                            onPress={()=>{{props.navigation.navigate('EventEdit',{idEvent:props.event.id})}}} />
                        <Avatar 
                            rounded
                            source={require('../../resources/imgs/general/food.png')}
                            containerStyle={{marginTop:10}}
                            onPress={()=>{{props.navigation.navigate('Dish',{idEvent:props.event.id})}}} />
                    </View>
                </View>
            </Card>           
        </View>
    );
}

export default EventCard;
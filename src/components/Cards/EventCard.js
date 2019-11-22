import React from 'react';
import {View,Text} from 'react-native';
import {Card, Avatar, Button} from 'react-native-elements';
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
                    <View style={{width:'30%',justifyContent:'center', justifyContent:'center',flexDirection:'column'}}>
                        <Button containerStyle={{marginBottom:5}} title='Editar' />
                        <Button title='Ver platos' />
                    </View>
                </View>
            </Card>           
        </View>
    );
}

export default EventCard;
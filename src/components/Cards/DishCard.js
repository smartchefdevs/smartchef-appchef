import React from 'react';
import {View,Text} from 'react-native';
import {Card, Avatar} from 'react-native-elements';
import ImgConfig from '../../config/ImgConfig';

const DishCard = (props)=>{
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
                                ImgConfig.dishes + props.dish.image_url,
                            }}/>
                    </View>
                    <View style={{width:'70%',justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                        <Text style={{marginBottom:10}}>{props.dish.name}</Text>
                        <Text style={{marginBottom:10}}>{props.dish.description}</Text>
                    </View>
                </View>
            </Card>           
        </View>
    );
}

export default DishCard;
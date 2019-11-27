import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

const HeaderEvents = (props)=>{
    return(
        <ImageBackground style={{flexDirection:'row',marginTop:0,width: '100%', height: 50}}  source={require('../../resources/imgs/general/header_event.png')}>
            <View style={{width:'50%',alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#fff',fontSize:20}}>{props.title}</Text>
            </View>
            <View style={{width:'50%',alignItems:'center',justifyContent:'center'}}>
                {renderButton(props.add,props.onpress)}
            </View>
        </ImageBackground>
    );
}

const renderButton = (render, onpress)=>{
    if(render){
        return(<Avatar 
            rounded
            source={require('../../resources/imgs/general/plus-circle.png')}
            onPress={()=>{{onpress();}}}
            />);
    } else {
        return(
            <View></View>
        );
    }
    
}

export default HeaderEvents;
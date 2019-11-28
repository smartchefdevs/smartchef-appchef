import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

const HeaderEvents = (props)=>{
    let {count} = props;
    return(
        <ImageBackground style={{flexDirection:'row',marginTop:0,width: '100%', height: 50}}  source={require('../../resources/imgs/general/header_event.png')}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{color:'#fff',fontSize:20}}>{count} Eventos reservados</Text>
            </View>

        </ImageBackground>
    );
}


export default HeaderEvents;
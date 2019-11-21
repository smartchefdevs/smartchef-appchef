import React from 'react';
import {View, Text} from 'react-native';
import {Card, Avatar, Divider} from 'react-native-elements';
import ImgConfig from '../../config/ImgConfig';

class MenuHeader extends React.Component{

    render(){
        return(
            <Card containerStyle={{marginTop: 5,width:'90%'}}>
                <View style={{width:'100%',alignItems:'center',padding:20,justifyContent:'center'}}>
                    <Avatar rounded
                    size="xlarge"
                        source={{
                            uri:
                            ImgConfig.users + 'dagoberto.png',
                        }} />
                    <Divider style={{marginTop: 10, backgroundColor: '#000', width:'100%', height:1 }} />
                    <Text style={{color: '#000', marginTop:20,fontSize:25}}>Nombre</Text>
                    <Text style={{color: '#000', marginTop:10,fontSize:18}}>Correo</Text>
                </View>
            </Card>
        );
    }
}

export default MenuHeader;
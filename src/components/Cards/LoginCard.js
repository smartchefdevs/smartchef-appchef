import React from 'react';
import {View} from 'react-native';
import {Avatar, Card} from 'react-native-elements';

import LoginForm from '../../components/forms/LoginForm';

class LoginCard extends React.Component{

    render(){
        return(
            <Card title='Ingresa Chef'>
                <View style={{justifyContent:'center',alignItems:'center', marginTop:20,marginBottom:20}}>
                    <Avatar
                        width={80}
                        height={80}
                        rounded
                        source={require('../../resources/imgs/general/chef.png')}
                        activeOpacity={0.7} />
                </View>
                <LoginForm navigation={this.props.navigation} />
            </Card>
        );
    }
}

export default LoginCard;
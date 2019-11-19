import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

import LoginCard from '../../components/Cards/LoginCard';

const Login = (props) => {
    return(
        <ScrollView>
            <View style={{marginTop:50}}>
                <LoginCard navigation={props.navigation}/>    
                <View style={{justifyContent:'center',alignItems:'center', marginTop:30,marginBottom:20}}>
                    <Text>
                        ¿No tienes cuenta?
                    </Text>
                </View>
                <Button
                    buttonStyle={{backgroundColor:'#FF5733',borderRadius: 0, marginLeft: 10, marginRight: 10, marginBottom:10}}
                    title='Registrate aquí'
                    onPress={()=>{props.navigation.navigate('Register')}} />
            </View>
        </ScrollView>
    );
}

export default Login;

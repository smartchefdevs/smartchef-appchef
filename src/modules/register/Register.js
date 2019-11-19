import React from 'react';
import {View, ScrollView} from 'react-native';
import RegisterCard from '../../components/Cards/RegisterCard';

const Register = ()=>{
    return(
        <ScrollView>
            <View style={{marginTop:50}}>
               <RegisterCard />
            </View>
        </ScrollView>
    );
}

export default Register;
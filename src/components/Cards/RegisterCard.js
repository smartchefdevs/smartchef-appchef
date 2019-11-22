import React from 'react';
import {Card} from 'react-native-elements';
import RegisterForm from '../forms/RegisterForm';

const RegisterCard = (props)=>{
    return(
        <Card title='Registrate Chef'>
            <RegisterForm />
        </Card>
    );
}

export default RegisterCard;
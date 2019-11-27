import React from 'react';
import {ScrollView,View} from 'react-native';
import {Card} from 'react-native-elements';
import MainHeader from '../../../components/Headers/MainHeader';
import HeaderEvents from '../../../components/Headers/HeaderEvents';
import DishForm from '../../../components/forms/DishForm';

const DishNew = (props)=>{
    return(
        <ScrollView>
            <MainHeader navigation={props.navigation} />
            <HeaderEvents title='' add={false} />
            <View style={{marginTop:20}}>
                <Card title='Nuevo plato'>
                    <DishForm navigation={props.navigation} />
                </Card>
            </View>
        </ScrollView>
    );
}

export default DishNew;
import React from 'react';
import {ScrollView,View} from 'react-native';
import {Card} from 'react-native-elements';
import MainHeader from '../../../components/Headers/MainHeader';
import HeaderEvents from '../../../components/Headers/HeaderEvents';
import EventForm from '../../../components/forms/EventForm';

import '../../../components/Headers/MainHeader';

const EventNew = (props)=>{
    return(
        <ScrollView>
            <MainHeader navigation={props.navigation} />
            <HeaderEvents title='' add={false} />
            <View style={{marginTop:20}}>
                <Card title='Nuevo evento'>
                    <EventForm />
                </Card>
            </View>
        </ScrollView>
    );
}

export default EventNew;
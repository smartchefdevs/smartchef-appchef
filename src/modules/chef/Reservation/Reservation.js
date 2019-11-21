import React from 'react';
import {View, Text} from 'react-native';
import MainHeader from '../../../components/Headers/MainHeader';

class Reservation extends React.Component{

    render(){
        return(
            <View>
                <MainHeader navigation={this.props.navigation} />
                <Text>Reservation Work</Text>
            </View>
        );
    }
}

export default Reservation;
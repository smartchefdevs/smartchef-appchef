import React from 'react';
import {View, Text} from 'react-native';
import MainHeader from '../../../components/Headers/MainHeader';

class Event extends React.Component{

    render(){
        return(
            <View>
                <MainHeader navigation={this.props.navigation} />
                <Text>Events Work</Text>
            </View>
        );
    }
}

export default Event;
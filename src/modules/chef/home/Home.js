import React from 'react';
import {ScrollView,View, Text} from 'react-native';
import MainHeader from '../../../components/Headers/MainHeader';

const Home = (props)=>{
    return(
        <ScrollView>
            <View>
                <MainHeader navigation={props.navigation}/>
                <Text>Home Works!!!</Text>
            </View>
        </ScrollView>
    );
}

export default Home;
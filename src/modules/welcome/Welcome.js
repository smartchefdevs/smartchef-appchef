import React from 'react';
import {View, StyleSheet, ActivityIndicator, ImageBackground} from 'react-native';

class Welcome extends React.Component{

    componentDidMount(){
        this.init();
    }

    init=()=>{
        setTimeout (() => {
            this.props.navigation.replace('Login');
        }, 3000);
    }

    render(){
        return(
            <ImageBackground 
                        source={require('../../resources/imgs/general/init.png')}
                        style={{width: '100%', height: '100%'}} 
                    >
                <View style={styles.container}>
                    <ActivityIndicator size={70} color="#fff" />
                </View>
            </ImageBackground>
        );
    }

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default Welcome;
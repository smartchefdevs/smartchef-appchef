import React from 'react';
import {View, StyleSheet, ActivityIndicator, ImageBackground} from 'react-native';
import LocalStorage from '../../utils/LocalStorage';

class Welcome extends React.Component{

    constructor(props){
        super(props);

        this.storage = new LocalStorage();
    }

    componentDidMount(){
        this.init();
    }

    init = ()=>{
        setTimeout (() => {
            this.verifyLogin();               
        }, 3000);
    }

    verifyLogin = async ()=>{
        if((await this.storage.getData(this.storage.USER_ID)) == null){
            this.props.navigation.replace('Login');
        } else {
            this.props.navigation.replace('Home');
        }
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
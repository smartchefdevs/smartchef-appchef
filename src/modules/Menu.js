import React from 'react';
import {ScrollView,View,StyleSheet, TouchableOpacity, Text} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import {Button, Avatar}  from 'react-native-elements';
import MenuHeader from '../components/Headers/MenuHeader';
import LocalStorage from '../utils/LocalStorage';

const options = [
    //{icon: require('../resources/imgs/general/home_black.png'), label:'Principal',module: 'Home'},
    {icon: require('../resources/imgs/general/event_black.png'), label:'Mis eventos', module: 'Event'},
    {icon: require('../resources/imgs/general/reservation_black.png'), label:'Reservas', module: 'Reservation'},
]

const Menu = (props)=>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <MenuHeader />
                <View style={{width:'60%', alignItems:'center'}}>
                    {options.map((option,key)=>{
                        return(
                            <MenuOption
                                key={key}
                                icon={option.icon}
                                label={option.label}
                                module={option.module}
                                navigation={props.navigation} />
                        )
                    })}
                    <Button raised title='Salir'
                        containerStyle={{marginBottom:20, width:'90%'}}
                        onPress={async ()=>{
                            var storage = new LocalStorage();
                            await storage.removeAll();
                            props.navigation.dispatch(
                                StackActions.reset({
                                    index: 0,
                                    actions: [NavigationActions.navigate({ routeName: 'Login' })]
                                })
                            );
                        }} />
                </View>                
            </View>
        </ScrollView>
        
    );
}

const MenuOption = (props)=>{
    return(
        <TouchableOpacity 
            onPress={() => {
            props.navigation.dispatch(
                StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: props.module })]
                })
            );
            }}>
            <View style={{padding:20,flexDirection:'row'}}>
                <View style={{width:'30%',justifyContent:'center',flexDirection:'column', alignItems:'center'}}>
                    <Avatar  
                        rounded
                        overlayContainerStyle={{backgroundColor: 'white'}}
                        source={props.icon} />
                </View>
                <View style={{width:'80%',justifyContent:'center',flexDirection:'column'}}>
                    <Text style={{marginLeft:30}}>{props.label}</Text>
                </View>
                
            </View>
            
        </TouchableOpacity>
    );
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    link:{
        width:100+'%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:20,
        paddingTop:20
    }
});

export default Menu;
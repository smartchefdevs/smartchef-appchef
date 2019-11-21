import React from 'react';
import {ScrollView,View,StyleSheet} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import {Icon}  from 'react-native-elements';
import MenuHeader from '../components/Headers/MemuHeader';

const options = [
    {icon: 'home', module: 'Home', color:'#2fb935'},
    {icon: 'restaurant', module: 'Event', color:'#2f5bb9'},
    {icon: 'today', module: 'Reservation', color:'#e6c636'},
]

const Menu = (props)=>{
    return(
        <ScrollView>
            <View style={styles.container}>
                <MenuHeader />
                <View>
                {options.map((option,key)=>{
                    return(
                        <Icon
                            key={key}
                            raised
                            name={option.icon}
                            type='material'
                            color={option.color}
                            size={40}
                            onPress={() => {
                                props.navigation.dispatch(
                                    StackActions.reset({
                                        index: 0,
                                        actions: [NavigationActions.navigate({ routeName: option.module })]
                                    })
                                );
                            }} />
                    )
                })}
                </View>                
            </View>
        </ScrollView>
        
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
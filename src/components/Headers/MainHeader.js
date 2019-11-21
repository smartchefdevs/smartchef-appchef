import React from 'react';
import {Header, Icon} from 'react-native-elements';

const MainHeader = (props)=>{
    return(
        <Header
            statusBarProps={{ barStyle: 'light-content',backgroundColor:'#d75b33' }}
            placement="left"
            leftComponent={<Icon navigation={props.navigation} name='menu' color='#fff' underlayColor='#3D6DCC' 
                onPress={()=>{props.navigation.navigate('Menu')}} />
            }
            centerComponent={{ text: 'Smartchef', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={{
                backgroundColor: '#d75b33',
                justifyContent: 'space-around',
                paddingTop:0,
                height:60
              }}
            />
    );
}

export default MainHeader;
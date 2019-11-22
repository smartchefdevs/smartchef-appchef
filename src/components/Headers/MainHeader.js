import React from 'react';
import {Header, Avatar} from 'react-native-elements';

const MainHeader = (props)=>{
    return(
        <Header
            statusBarProps={{ barStyle: 'light-content',backgroundColor:'#d75b33' }}
            placement="left"
            leftComponent={<Avatar rounded overlayContainerStyle={{backgroundColor:'#d75b33'}} containerStyle={{backgroundColor:'#d75b33'}} 
                source={require('../../resources/imgs/general/menu_white.png')} 
                onPress={()=>{props.navigation.navigate('Menu')}} />
            }
            centerComponent={{ text: 'Smartchef', style: { color: '#fff' } }}
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
import React from 'react';
import {Card, Avatar,Divider, ThemeConsumer } from 'react-native-elements';
import {View,Text,StyleSheet} from 'react-native';
import ImgConfig from '../../config/ImgConfig';

const ReservationCard = (props) => {
    let {date_reservation, costumer, event}  = props.data;

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row', 
          },
          itemLeft: {
            width: '30%',
          },
          itemRight: {
            width: '70%',
          }
      });
      
      let title_event=`Evento: ${event.name}`

    return(
        <Card title={title_event} >
            
            <View style={styles.container}>

                <View style={styles.itemLeft}>
                    <Avatar
                        size="large"
                        rounded
                        source={{
                        uri:ImgConfig.events + costumer.image_url,
                        }}
                    />
                </View>

            
                <View style={styles.itemRight}>
                    <Text style={{fontWeight: 'bold'}}>
                         Nombre:
                    </Text>

                    <Text>
                         {costumer.full_name}
                    </Text>
                    <Divider/>

                    <Text style={{fontWeight: 'bold'}}>
                         Fecha de reservación:
                    </Text>

                    <Text>
                         {date_reservation}
                    </Text>
                    <Divider/>
                </View>
               
            </View>
        </Card>
    );

    };

export default ReservationCard;
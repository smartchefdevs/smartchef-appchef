import React from 'react';
import {View, Text} from 'react-native';
import ReservationHeader from '../../../components/Headers/ReservationHeader';
import ReservationCard from '../../../components/Cards/ReservationCard'; 
import ReservationService  from '../../../service/ReservationService';
import DataReservationTransform from './util/DataReservationTransform'
class Reservation extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            data:[],
        }

        this.service = new ReservationService();
    }

    componentDidMount(){
        this.findAllReservationsByChef()
    }
    

    findAllReservationsByChef = async () => {
        //var idChef = (await this.storage.getData(this.storage.USER_ID)).id;
        this.service.findAllByChef(14,(json)=>{{this.success(json)}},(msg)=>{{this.error(msg)}});
    }

    success(json) {
        this.setState({
            isLoading:false,
            data:json.data
        })
    }

    error(data) {
        //
    }
    render(){
        return(
            <View>
                <ReservationHeader count={this.state.data.length}/>
                {this.state.data.map(element => 
                    <ReservationCard data={element}/>
                )}
                
            </View>
        );
    }
}

export default Reservation;
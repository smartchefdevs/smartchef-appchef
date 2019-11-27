import ApiConfig from '../config/ApiConfig';
import FetchService from './FetchService';

class EventService extends FetchService{

    create = (event, success, error)=>{
        this.post(ApiConfig.eventCreate, event, success, error);
    }

    update = (event, success, error)=>{
        this.post(ApiConfig.eventUpdate, event, success, error);
    }

    eventsByChef = (idChef,success,error)=>{
        this.get(ApiConfig.eventsByChef + idChef,success,error);
    }

    eventById = (idEvent,success,error)=>{
        this.get(ApiConfig.eventById + idEvent,success,error);
    }

    addDish = (dish, success, error)=>{
        this.post(ApiConfig.eventDishCreate, dish, success, error);
    }
}

export default EventService;
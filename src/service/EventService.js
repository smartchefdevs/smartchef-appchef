import ApiConfig from '../config/ApiConfig';
import FetchService from './FetchService';

class EventService extends FetchService{

    create = (event, success, error)=>{
        this.post(ApiConfig.eventCreate, event, success, error);
    }

    eventsByChef = (idChef,success,error)=>{
        this.get(ApiConfig.eventsByChef + idChef,success,error);
    }
}

export default EventService;
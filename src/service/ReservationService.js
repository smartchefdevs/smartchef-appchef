import ApiConfig from '../config/ApiConfig';
import FetchService from './FetchService';

class EventService extends FetchService{
    findAllByChef = (event, success, error) => {
        this.get(`${ApiConfig.reservationFindAll}${event}`, success, error);
    }
}

export default EventService;
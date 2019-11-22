import ApiConfig from '../config/ApiConfig';
import FetchService from './FetchService';

class AuthService extends FetchService{

    login = (credentials, success, error)=>{
        this.post(ApiConfig.authLogin, credentials, success, error);
    }
}

export default AuthService;
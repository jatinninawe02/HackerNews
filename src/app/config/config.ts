import { environment } from '../../environments/environment';

export class Config {
    public static get BASE_POINT_API() { return environment.API_END_POINT; }
    public static get BASE_POINT_JSON() { return 'assets/jsons/'; }

    public static BASE_API_MAPPING = {

    };

    // ALL JSON FILES ENDPOINTS
    public static JSON = {

    };

    public static logger(data) {
        try {
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
}
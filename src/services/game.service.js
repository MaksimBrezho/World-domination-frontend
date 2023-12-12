import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/";

class GameDataService {
    getAll() {
        return axios.get(API_URL + 'games', {headers: authHeader()});
    }

    getGameDetails(id){
        return axios.get(API_URL + `join-game/${id}`, {headers: authHeader()});
    }
}

export default new GameDataService();

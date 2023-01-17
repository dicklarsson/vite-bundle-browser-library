import axios from "axios";
/* 
    A module that uses an external library (axios) and requests data from mock/fake online service
*/
export async function getUsers() {

    const URL = "https://reqres.in/api/users?page=2";
    const axiosResponse = await axios.get(URL);

    const apiResult = axiosResponse.data;
    return Object.values(apiResult.data);
}


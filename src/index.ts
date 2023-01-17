import axios from "axios";
/*

    A module that uses external library (axios) and requests data from mock/fake online service
*/
export async function getUsers() {
    const URL = "https://reqres.in/api/users?page=2";
    const axiosResponse = await axios.get(URL);
    const apiData = axiosResponse.data;

    console.log("Object values", Object.values(apiData.data));
    return Object.values(apiData.data);
}


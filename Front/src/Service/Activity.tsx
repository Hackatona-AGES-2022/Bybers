import axios from '../Utils/Api';
const id = '6291f52a5e055e42d43c7fa4'


export async function getDailyActivities(){
    return await axios.get(`activities/getAllActivitiesByDay/${id}`);
}
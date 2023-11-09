import axios from 'axios'
import { baseURL } from '../constants/baseURL';
export async function getMovies(title) { 
try{
const url=baseURL+`s=${title}`
let response=await axios({
    headers:{ Accept: "application/json" },
    method:"GET",
    url
})
return response;

}catch(error){
    console.log("Error: ",error);
}
 }
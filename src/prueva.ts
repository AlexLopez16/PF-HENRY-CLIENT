import  axios  from "axios";
import { Dispatch } from "redux";
import {types} from "../src/types/types"


const values ={name,description,participants,requirements}
export const registerProject= (values:Object
 ) =>
{return async(dispatch:Dispatch)=>{
try {
    const res = await axios.post(`http://localhost:3001/api/Project`,values)
    console.log(res)
    dispatch({
        type:types.registerProject,
        payload:res.data,

    });
} catch (error) {
    console.log(error)
    
}


} 
    
    
     }

//      POST PROJECT(CREATE A PROJECT)
// axios.post("http://localhost:3001/api/project",{name,description,participants,requirements},{ headers: {'user-token':${token}}})
// //ejemplo:{
//   "name": "Jona2",
//   "description": "Ejemplo",
//   "participants": 5,
//   "requirements": [
//     "JavaScript"
//   ]
// }
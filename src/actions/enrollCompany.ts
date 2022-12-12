
import axios from "axios"


interface CompanyProps {

    name: String,
    email: String,
    contraseña: String,
    Urlpagina:String,
    pais:String
}

export const companyRegister = (company:CompanyProps) =>{
 return async (dispatch:any) =>{
  try {
    const response = await axios.post(`http://localhost:3001/api/company`)
  } catch (error) {
    console.log(error)
  }



 }


}





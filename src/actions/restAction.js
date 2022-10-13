 
 
import axios from 'axios'

export const restuarntList=()=>async(dispatch)=>{
    const {data} = await axios.get('./restaurants.json')
}


import {useState, useEffect} from 'react'
import axios from 'axios'


const useDeleteData = (url) => {

    const [data,setData] = useState(null);
    const [loading,setLoader] =useState(false);
    const [error,setError] = useState(null);

    
    
    useEffect(()=>{
        if(url){
        setLoader(true);    
        axios.delete('http://localhost:8000/api/v1/'+url,)
        
		.then((response) => {			
            setData(response.data);	
            setError(null);
            setLoader(false);
		}).catch(error =>{
            setData(null);
            setLoader(false);
            if (error?.response?.data?.error) {
                setError(error.response.data.error);
            } else {
                setError({ non_field_error: 'Something went wrong' });
            }              
		});
        }
    },[url]);
    return {data,error,loading}
}
 
export default useDeleteData;



import { useState, useEffect } from 'react'
import axios from 'axios'


const useUpdateData = (url, formdata, type = 'application/json') => {

    const [data, setData] = useState(null);
    const [loading, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

 

    useEffect(() => {

        if (formdata) {
            setLoader(true);
            axios.put(`http://localhost:8000/api/v1/` + url, formdata)
         
                .then((response) => {
                    console.log(response)
                    setData(response.data.result);
                    setMessage(response.data.result);
                    setError(null);
                    setLoader(false);
                }).catch(error => {
                    
                    setData(null);
                    setMessage(error?.response?.data);
                    setLoader(false);
                    if (error?.response?.data?.error) {
                        setError(error.response.data.error);
                    } else {
                        setError({ non_field_error: 'Something went wrong' });
                    }
                });
        }

    }, [formdata]);
    return { data, error, loading, message }
}

export default useUpdateData;



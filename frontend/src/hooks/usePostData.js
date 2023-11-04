import { useState, useEffect } from 'react'
import axios from 'axios'


const usePostData = (url, formdata, type = 'application/json') => {

    const [data, setData] = useState(null);
    const [loading, setLoader] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);



    useEffect(() => {

        if (formdata) {
            setLoader(true);

            axios.post('http://localhost:8000/api/v1/' + url, formdata)
                .then((response) => {
                    console.log(response)
                    setData(response.data.result);
                    setMessage(response.data.result);
                    setError(null);
                    setLoader(false);
                }).catch(error => {
                    console.log(error)
                    setData(null);
                    setMessage(null);
                    setLoader(false);
                    if (error?.response?.data?.error) {
                        setError(error.response.data);
                    } else {
                        setError({ non_field_error: 'Something went wrong' });
                    }
                });
        }

    }, [formdata]);
    return { data, error, loading, message }
}

export default usePostData;



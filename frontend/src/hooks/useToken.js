import { useState, useEffect } from "react";

const useToken = (content_type = 'application/json') => {

    const [defaultOptions, setDefaultOptions] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [userName, setUserName] = useState(null);
    const [userImage, setUserImage] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        setAccessToken(localStorage.getItem('accessToken'));
        setRefreshToken(localStorage.getItem('refreshToken'));
        setUserName(localStorage.getItem('userName'));
        setUserImage(localStorage.getItem('userImage'));
        setUserId(localStorage.getItem('userId'));


        setDefaultOptions({
            headers: {
                'Content-Type': content_type,
                authorization: `Bearer ` + localStorage.getItem('accessToken')
            },
        });
    }, [])


    return {accessToken, refreshToken, userName, userImage, userId, defaultOptions};
}

export default useToken;
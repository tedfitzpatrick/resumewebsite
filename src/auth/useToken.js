import React from "react";

const useToken = () => {

    const [token, setTokenInternal] = React.useState(()=>{

        return localStorage.getItem('token');

    });

    const setToken = (newToken) => {

        localStorage.setItem('token', newToken);
        setTokenInternal(newToken);

    }    

    return [token, setToken];

}

export default useToken;
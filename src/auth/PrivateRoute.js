import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const user = null;

    if (!user) {
        return <Navigate to='/signin' />;
    }

    return children;

};    

export default PrivateRoute;
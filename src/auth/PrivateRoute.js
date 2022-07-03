import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = (props) => {

    const user = null;

    if (!user) {
        return <Navigate to='/signin' />;
    }

    return <Route {...props} />;

};    

export default PrivateRoute;
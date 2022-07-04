import { Navigate, Route } from 'react-router-dom';
import { useUser } from './useUser';

const PrivateRoute = ({children}) => {

    const user = useUser();

    if (!user) {
        return <Navigate to='/signin' />;
    }

    return children;

};    

export default PrivateRoute;
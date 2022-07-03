import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = (props) => {

    const user = null;

    if (!user) {
        return <Redirect to='/signin' />;
    }

    return <Route {...props} />;

};    

export default PrivateRoute;
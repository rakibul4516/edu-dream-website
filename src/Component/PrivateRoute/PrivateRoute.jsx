import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    if(loader){<h1>Loading......</h1>}
    if (user ==null){
        return <Navigate to='/login'></Navigate>
    }
    return children
};

PrivateRoute.propTypes = {
    children:PropTypes.node,
};

export default PrivateRoute;
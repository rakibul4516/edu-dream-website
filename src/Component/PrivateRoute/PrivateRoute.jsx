import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    if (loader) {
        <><div className='flex items-center justify-center h-[80vh] my-auto'>
            <span className="loading loading-spinner loading-lg"></span>
        </div></>
    }
    if (user) {
        return children;
    }
    return(
        <div>
            <Navigate to='/login'></Navigate>
        </div>
    )
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;
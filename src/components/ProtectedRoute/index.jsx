import Cookies from 'js-cookie';
import {Redirect, Route} from 'react-router-dom';

const ProtectedRoute = (props) =>{
    const jwt_token = Cookies.get('jwt_token');
    if (jwt_token === undefined) {
        return <Redirect to="/login" />
    }
    return <Route {...props} />
}
export default ProtectedRoute;
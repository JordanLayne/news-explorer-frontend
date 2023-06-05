import { useAppContext } from '../context/appContext';
import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
  const {isLoggedIn } = useAppContext();


  if (!isLoggedIn) {
    return <Navigate to='/' />;
  }
  return children;
};

export default ProtectedRoute;

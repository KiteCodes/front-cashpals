import { useAuth } from '../hooks/use-auth'
import Arrival from '../pages/Arrival'

const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth()
    return isAuthenticated ? <Component/> : <Arrival/>
}

export default PrivateRoute
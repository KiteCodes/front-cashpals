import { useAuth } from '../hooks/use-auth'

const PrivateRoute = ({ component: Component }) => {
    const { isAuthenticated } = useAuth()
    return isAuthenticated && Component
}

export default PrivateRoute
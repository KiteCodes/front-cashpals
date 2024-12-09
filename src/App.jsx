import Router from "./router/Router";
import './styles/App.css'
import { localToken } from "./hooks/local-token";
const App = () => {
   localToken()

   return <Router/>
}


export default App
import { UserProvider } from './Context API'
import Home from './Context API/Home'
import UserList from "./UserList.jsx";

const App = () => {
  return (
      <UserProvider>
        <Home />
         <UserList count={3} />
      </UserProvider>
  )
}

export default App

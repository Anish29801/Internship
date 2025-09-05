import { UserProvider } from './Context API'
import Home from './Context API/Home'

const App = () => {
  return (
      <UserProvider>
        <Home />
      </UserProvider>
  )
}

export default App

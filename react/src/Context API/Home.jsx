import {useContext} from 'react'
import { UserContext } from '.'

const User = useContext(UserContext)

const Home = () => {
  return (
    <div>
       <h2>{User.MyName}</h2>
      <p>Age: {User.MyAge}</p>
      <p>Gender: {User.MyGender}</p>
    </div>
  )
}

export default Home

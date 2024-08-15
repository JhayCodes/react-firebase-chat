import Chat from "./components/chat/chat"
import List from "./components/list/list"
import Detail from "./components/detail/detail"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"
import { onAuthStateChanged } from "firebase/auth"
import { userAuth } from "./components/lib/firebase"

const App = () => {

  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(userAuth,(user) => {
      console.log(user);
    });

    return () => {
      unSub();
    }
  }, [])

  return (
    <div className='container'>

     { user ? (
      <>
        <List />
        <Chat />
        <Detail />
      </>) : (<Login />)}
      
        <Notification />
    </div>
  )
}

export default App
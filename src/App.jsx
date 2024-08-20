import Chat from "./components/chat/chat"
import List from "./components/list/list"
import Detail from "./components/detail/detail"
import Login from "./components/login/Login"
import Notification from "./components/notification/Notification"
import { onAuthStateChanged } from "firebase/auth"
import { userAuth } from "./components/lib/firebase"
import { useUserStore } from "./components/lib/userStore"
import { useEffect } from "react"

const App = () => {

const {currentUser, isLoading, fetchUserInfo} = useUserStore();

  useEffect(() => {
      const unSub = onAuthStateChanged(userAuth,(user) => {
        fetchUserInfo(user.uid);
    
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);

  if(isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>

     { currentUser ? (
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
import { createContext, useState, useEffect } from "react";
import productService from "../services/product";

export const UserContext = createContext(null)

const UserContextProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState(null)

    useEffect(() => {
        console.log(isLogged)
        const loggedUserJSON = window.localStorage.getItem('loggedAllfootballUser');
        if (loggedUserJSON) {
          const loggedUser = JSON.parse(loggedUserJSON);
          if (loggedUser) {
            console.log(`Logged in user is: ${loggedUser.name}`)
            setIsLogged(true)
            console.log(isLogged)
            setUser(loggedUser)
          }
          productService.setToken(loggedUser.token)
          console.log(`user set to userstate is ${user}`)
        }
      }, [])
    
      const handleLogOut = () => {
        if (window.confirm("Confirm log out")) {
          window.localStorage.removeItem('loggedAllfootballUser');
          setIsLogged(false);
          setUser(null);
        }
      }


      const value = {isLogged, handleLogOut,user,setIsLogged, setUser}
      return (
        <div>
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        </div>
      )
}

export default UserContextProvider
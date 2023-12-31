import { createContext,useState,useContext } from "react";

const userContext = createContext();

export const useUserContext = () =>  useContext(userContext)


// eslint-disable-next-line react/prop-types
export default function UserContext ( {children}) {
const [user,setUser] = useState(null);

return <userContext.Provider value={{user,setUser}}>
    {children}
</userContext.Provider>

}
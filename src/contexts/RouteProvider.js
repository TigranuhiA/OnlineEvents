// import {createContext, useContext, useState} from "react";
// import Login from "../components/Login/login";

// const RouteContext = createContext(null)

// const RouteProvider = ({children}) => {
//     const [activeRoute, setActiveRoute] = useState(<Login />)

//     return <RouteContext.Provider value={{activeRoute, setActiveRoute}}>
//         {children}
//     </RouteContext.Provider>
// }

// export const useAuthRoute = () => useContext(RouteContext)

// export default RouteProvider;
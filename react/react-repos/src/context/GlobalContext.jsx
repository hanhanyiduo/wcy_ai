import { 
    createContext,
    useContext,
    useReducer,
} from "react";
import {
    repoReducer 
} from '@/reducer/repoReducer'

export const GlobalContext = createContext();

const initialState = {
    repos: [],
    loading: true,
    error: null,
}

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(repoReducer,initialState);
    return (
        // state 应用状态
        <GlobalContext.Provider value={{state,dispatch}}> 
            {children}
        </GlobalContext.Provider>
    )
}
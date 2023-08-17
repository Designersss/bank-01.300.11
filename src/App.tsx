import {BrowserRouter} from "react-router-dom";
import Router from "./router/Router.tsx";
import {useEffect} from "react";
import {useGetUsersQuery} from "./store/api/api.ts";
import {useActions} from "./hooks/useActions.ts";
import Sidebar from "./components/Sidebar.tsx";

function App() {
    const {data, isLoading} = useGetUsersQuery([])
    const {user} = useActions()
    useEffect(() => {
        const token = localStorage.getItem('token')
        const candidate = data?.find((user) => user.email === token)
        user(candidate)
    }, [isLoading])
    return (
        <BrowserRouter>
            <div className='flex'>
                <div className='flex h-screen w-44'>
                    <Sidebar />
                </div>
                <div className='ml-5 mt-5'>
                    <Router />
                </div>
            </div>

        </BrowserRouter>
    )
}

export default App

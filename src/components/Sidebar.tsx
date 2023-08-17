import {Link, useNavigate} from "react-router-dom";
import {HOME_ROUTES, LOGIN_ROUTES, TRANSFER_ROUTES} from "../utils/route.ts";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {useActions} from "../hooks/useActions.ts";

const Sidebar = () => {
    const userNow = useSelector((state: RootState) => state.user)
    const history = useNavigate()
    const {user} = useActions()
    const logout = () => {
        user(null)
        localStorage.setItem('token', '')
        history(LOGIN_ROUTES)
    }
    return (
        <div className='fixed top-0 left-0 z-40 w-44 h-screen p-2 bg-[#222222]'>
            <Link className='block mt-5 px-3 py-1 bg-[#444444] rounded-xl' to={HOME_ROUTES}>Начальная</Link>
            <Link className='block mt-5 px-3 py-1 bg-[#444444] rounded-xl' to={TRANSFER_ROUTES}>Перевод</Link>
            <div className='mt-32'>
                {userNow.user
                    ? <button onClick={logout} className='w-full flex justify-start mt-5 px-3 py-1 bg-[#444444] rounded-xl'>Выйти</button>
                    : <Link className='block mt-5 px-3 py-1 bg-[#444444] rounded-xl' to={LOGIN_ROUTES}>Вход</Link>
                }

            </div>
        </div>
    );
};

export default Sidebar;
import {useCreateUserMutation, useGetUsersQuery} from "../store/api/api.ts";
import {useState} from "react";
import {IUser} from "../types/user-types.ts";
import {useActions} from "../hooks/useActions.ts";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTES} from "../utils/route.ts";

const initialState: IUser = {
    id: 0,
    email: '',
    password: '',
    name: 'new user',
    cash: 0,
    transfer: []
}

function App() {
    const {data, isLoading} = useGetUsersQuery([])
    const userNow = useSelector((state: RootState) => state.user)
    const [initialUser, setInitialUser] = useState(initialState)
    const [createUser] = useCreateUserMutation()
    const history = useNavigate()
    const {user} = useActions()

    const registration = async () => {
        if (initialUser.email === '' || initialUser.password === ''){
            alert('Заполните пустые поля')
        } else {
            if (data){
                const candidate = data.find((user) => user.email === initialUser.email)
                if (candidate){
                    alert('Такой пользователь существует')
                } else {
                    await createUser(initialUser)
                    user(initialUser)
                    localStorage.setItem('token', initialUser.email)
                    history(HOME_ROUTES)
                }
            }
        }

    }
    if (isLoading){
        return <div>Loading.....</div>
    }
    const login = async () => {
        if (data){
            const candidate = data.find((user) => user.email === initialUser.email)
            if (candidate?.password === initialUser.password){
                user(candidate)
                localStorage.setItem('token', candidate.email)
                history(HOME_ROUTES)
            } else {
                alert('Неправильный пароль или пользователь не найден')
            }
        }
    }


    return (
        <div>
            <p>{userNow.user ? userNow.user.email : 'none'}</p>
            <p>{userNow.user ? userNow.user.cash : 'none'}</p>
            <div>
                <input className='border-2 text-black px-4 py-1 outline-0 rounded-2xl border-amber-200' value={initialUser.email}
                       onChange={e => setInitialUser({...initialUser, email: e.target.value})} placeholder='Email'
                       type="text"/>
                <input className='border-2 text-black px-4 py-1 outline-0 rounded-2xl ml-3 border-amber-200'
                       value={initialUser.password}
                       onChange={e => setInitialUser({...initialUser, password: e.target.value})} placeholder='Password'
                       type="text"/>
            </div>
            <div className='mt-5'>
                <button onClick={registration}>Регистрация</button>
                <button className='ml-5' onClick={login}>Вход</button>
            </div>
        </div>
    )
}

export default App

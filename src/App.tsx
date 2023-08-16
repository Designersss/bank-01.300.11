import {useCreateUserMutation, useGetUsersQuery} from "./store/api/api.ts";
import {useState} from "react";
import {IUser} from "./types/user-types.ts";

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
    const [initialUser, setInitialUser] = useState(initialState)
    const [createUser] = useCreateUserMutation()
    const addUser = async () => {
        await createUser(initialUser)
    }

    return (
        <div>
            {
                isLoading
                    ? <>Loading...</>
                    : data
                        ? data.map((item: IUser) =>
                            <div key={item.id}>{item.name}</div>
                        )
                        : <>Not Found...</>
            }
            <div>
                <input className='border-2 px-4 py-1 outline-0 rounded-2xl border-amber-200' value={initialUser.email} onChange={e => setInitialUser({...initialUser, email: e.target.value})} placeholder='Email' type="text"/>
                <input className='border-2 px-4 py-1 outline-0 rounded-2xl ml-3 border-amber-200' value={initialUser.password} onChange={e => setInitialUser({...initialUser, password: e.target.value})} placeholder='Password' type="text"/>
            </div>
            <button onClick={addUser}>Add User</button>
        </div>
    )
}

export default App

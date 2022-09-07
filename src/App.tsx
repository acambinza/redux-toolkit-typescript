import { useState } from 'react'

import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch, getUserRequest } from './redux';

export const userAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const userAppDispatcher = () => useDispatch<AppDispatch>()

function App() {

  const userState = userAppSelector(state => state.userReduce);
  const dispatch = userAppDispatcher()

  const [name, setName] = useState('')

  const { user, loading, error } = userState;

  console.log(user, loading, error)

  const handleUser = () => {
    dispatch(getUserRequest(name))
  }

  return (
    <>
      <p>Teste com Redux e Redux Saga</p>
      <p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleUser} disabled={!name.length}>Buscar</button>
      </p>
      <div>
        {loading && <p>Loading...</p>}
        {user ?
          (
            <>
              <label>{user.name}</label>
              <img src={user.avatar_url} />
            </>
          ):''
        }
        {user && !loading && <p>No users available!</p>}
        {error && !loading && <p>{error}</p>}
      </div>
    </>
  )
}

export default App

import { useState } from 'react'

import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from './redux';

import { getUser } from '../src/redux/actions/user';

function App() {

  const users = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch()

  const [name, setName] = useState('')

  const { loading, user, error } = users;


  console.log('slicer', users)

  const handleUser = async () => {
    dispatch(getUser())
  }

  /*
  const CardUser = (user: any) => (
    <>
      <p>Teste</p>
      <div>{user.name}</div>
      <div><img src={user.avatar_url} /></div>
    </>

    {loading && <p>Loading...</p>}
        {!loading &&
          <>

          </>
        }
        {user && !loading && <p>No users available!</p>}
        {error && !loading && <p>{error}</p>}

  )*/

  return (
    <>
      <p>Teste com Redux e Redux Toolkit</p>
      <p>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleUser} disabled={!name.length}>Buscar</button>
      </p>
      <div>
        {loading && <p>Loading...</p>}
        {user &&
          (
            user.map(user => user.name)
          )
        }
        {!user && !loading && <p>No users available!</p>}
        {error && !loading && <p>{error}</p>}
      </div>
    </>
  )
}

export default App

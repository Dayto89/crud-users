import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateInfo, setUpdateInfo] = useState()

  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'

  const [users, getAllUsers, createNewUser, deleteUserById, updateUserById] = useFetch(baseUrl, setCloseForm)

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  useEffect(() => {
    getAllUsers('/users')
  }, [])

  console.log(users);

  return (
    <div>
      <div className='container__header'>
        <h1 className='title'>Users</h1>
        <button className='formuser__btn__create' onClick={handleOpenForm}>+ Create New User</button>
      </div>
      <div className='container__users'>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          closeForm={closeForm}
          setCloseForm={setCloseForm}
        />
      </div>
      <div className='container__user'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App

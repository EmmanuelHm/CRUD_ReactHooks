import React, { useState } from 'react'
// Libreria para generar Id's Random
import { v4 as uuidv4 } from 'uuid'
// Components
import UserTable from './components/UserTable'
import AddUserForm from './components/AddUserForm'
import EditUserForm from './components/EditUserForm'

function App() {

  // Variables
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  //  State Variables 
    //State for Array UsersData 
    const [users, setUsers] = useState(usersData)
    // State for Show Edit Form
    const [editing, setEditing] = useState(false)
    // State for edit one User
    const [currentUser, setCurrentUser] = useState({
      id: null, name: '', username: ''
    })

  // Functions

    // Agregar Usuarios
    const addUser = (user) => {
      user.id = uuidv4()
      setUsers([
        ...users,
        user
      ])
    }

    // Eliminar Usuarios 
    const deleteUser = (id) => {
      setUsers(users.filter(user => user.id !== id))
    }

    // Editar Usuario
    const editRow = (user) => {

      setEditing(true)

      setCurrentUser({
        id: user.id, 
        name: user.name,
        username: user.username
      })
    }

    // Actualizar Usuario
    const updateUser = (id, updatedUser) => {
      setEditing(false)

      setUsers( users.map(user => (user.id === id ? updatedUser : user) ) )
    }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
       <div className="flex-row">
         <div className="flex-large">

          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  currentUser={currentUser}
                  updateUser={updateUser} />
              </div>
            ) 
            : (
              <div>
                <h2>Add user</h2>
                <AddUserForm 
                  addUser={addUser}/>
              </div>
            )
          }

         </div>
         <div className="flex-large">
           <h2>View Users</h2>
           <UserTable 
              users={users} 
              deleteUser={deleteUser} 
              editRow={editRow} />
         </div>
       </div>
    </div>
  );
}

export default App;
import React from 'react'

export const Todos = ({users, setUsers}) => {

    let idLocal = localStorage.getItem('idUser')

    const [id, setId] = useState(idLocal)
    const [userActual2, setUserActual] = useState({})
    

    let loggedUser = users.filter( (user) => {
        return user.id === id
    })

    let userActual= {}

    if(loggedUser.length > 0){
        userActual = loggedUser[0]
    }


  return (

    userActual.todos.map((todo) => 
    {
        <div>
            {todo.descripcion}
        </div>
    })
  )
}

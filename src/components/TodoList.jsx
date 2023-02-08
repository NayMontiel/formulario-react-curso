import { useEffect } from "react"
import { useState } from "react"
import Formulario from "./Formulario"
import Todo from "./Todo"

const TodoList = () => {
  const [todos, setTodos] = useState([])

  // efecto de react que se ejecuta una vez si deseas hacer varios  efecto se recomiendo hacerse por aparte cada uno por ello en este coloca mos [] vacios
  useEffect( () => {
    if(localStorage.getItem('todos')){
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  }, []);
// en el deseamos que se vayan guardando todos los cambios por ello que agregamos el todos y a medida que actualizamos la pagina veremos los distintos cambios 
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },  [todos]);

  const agregarTodo = (todo) => {
    console.log(todo)
    setTodos((old) => [...old, todo])
  };

  const eliminarTodo = (id) => {
    setTodos((old) => old.filter(item => item.id !== id))
  }

  const editarTodo = (id) => {
    const editarTodos = todos.map(item => (
      item.id === id ? { ...item, estado: !item.estado } : item
    ))

    setTodos(editarTodos);
  };


  return (
    <>
      <Formulario agregarTodo={agregarTodo} />
      <ol className="list-group mt-4 list-group-numbered ">
        {
          todos.map((item) => (

            <Todo
              key={item.id}
              todo={item}
              eliminarTodo={eliminarTodo}
              editarTodo={editarTodo}
            />

          ))}
      </ol>

    </>
  )
}

export default TodoList
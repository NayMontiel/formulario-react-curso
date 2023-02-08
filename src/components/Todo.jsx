import React from 'react'

const Todo = ({todo, eliminarTodo, editarTodo}) => {
    const{nombre, descripcion, estado, check, id} = todo

    return (
            <li className="list-group-item border-success d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{nombre} ({estado ? 'Finalizado' : 'Pendiente '})</div>
                        <p>{descripcion}</p>

                        <div>
                            {/* en el onclick se debe hacer una funcion de flecha ya que si se le pasa el paramentro se activara de una vez*/}
                            <button className='btn btn-danger me-2' onClick={() => eliminarTodo(id)}>Eliminar</button>
                            <button className='btn btn-warning' onClick={() => editarTodo(id)}>Editar</button>
                        </div>
                </div>
                <span className="badge bg-primary rounded-pill">
                    {check && "Prioridad"}
                </span>
            </li>
    )
}

export default Todo
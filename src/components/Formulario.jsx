import Swal from 'sweetalert2'
import { useFormulario } from "../hooks/useFormulario"

//aca se colocan el valor del name de los inpust
const Formulario = ({agregarTodo}) => {
    const initialState = {
        nombre: '',
        descripcion: '',
        estado: 'pendiente',
        check: false
    }

    const [inputs, handleChange, reset] = useFormulario(initialState)

    const { nombre, descripcion, estado, check} = inputs;

    const handleSubmit = e => {
        e.preventDefault();

        // console.log(todo)
        // const {nombre, descripcion} = todo;
        // trim sirve para limpiar los espacios al principio y al final y es lo ideal para validad campos vacios en vez del .legth ya que toma en cuenta los espacios con el teclado aunque no escribas nada y no es lo ideal
        if (!nombre.trim()) {
            // console.log('no deje campos en blanco');
            e.target[0].focus();
            
            // alert validacion
            Swal.fire({
                title: 'Error!',
                text: 'No Deje Campos Nombre Vacios',
                icon: 'error',
                confirmButtonText: 'ok'
            });
            return;
        }
        if (!descripcion.trim()) {
             e.target[1].focus();

             Swal.fire({
                title: 'Error!',
                text: 'No Deje Campos Descripcion Vacios',
                icon: 'error',
                confirmButtonText: 'ok'
            });
            return;
        }
        Swal.fire({
            title: 'Éxito!',
            text: 'Tarea Agregada',
            icon: 'success',
            confirmButtonText: 'ok'
        });
    

        agregarTodo({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === 'pendiente' ? false : true,
            check: check,
            id: Date.now(),
        });
        
        reset();
    };


    return (
        <>
            <h2>Agregara Todo</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    className="form-control mb-2 border-info"
                    value={nombre}
                    onChange={handleChange}
                />

                <textarea
                    placeholder="Ingrese descripcion del todo"
                    name="descripcion"
                    className="form-control mb-2 border-danger"
                    value={descripcion}
                    onChange={handleChange}
                />

                <select
                    name="estado"
                    className="form-control mb-2 border-warning text-dark mt-2"
                    value={estado}
                    onChange={handleChange}
                >
                    <option value="">Seleccione</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>

                <div className="form-check">
                    <input
                        name="check"
                        className="form-check-input mb-2 border-success mt-3 mb-3"
                        type="checkbox"
                        id="flexCheckChecked"
                        checked={check}
                        onChange={handleChange}
                    />

                    <label className="form-check-label mt-3 mb-3" htmlFor="flexCheckeChecked">
                        Prioridad
                    </label>
                </div>


                <button className="btn btn-primary border-danger mt-2">Agregar</button>

            </form>
        </>
    )
}

export default Formulario
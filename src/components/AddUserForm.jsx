import React from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

    // State Form 
    const {register, formState: {errors}, handleSubmit, reset } = useForm()

    // Functions
    const onSubmit = (data) => {
        // console.log(data);
        props.addUser(data)

        // Limpiar Campos
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label>Name</label>
            <input type="text" name="name" {...register("name", {required: true}) } />
            <div>{errors?.name && "Name es Requerido"}</div>
            

            <label>Username</label>
            {/* <input type="text" name="username" /> */}
            <input type="text" name="username" {...register("username", {required: true}) } />
            <div>{errors?.username && "Username es Requerido"}</div>

            
            <br />
            <button>Add new user</button>
        </form>
    );
}
 
export default AddUserForm;
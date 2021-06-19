import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

    // console.log(currentUser)

    // State Form 
    const {register, setValue ,formState: {errors}, handleSubmit, reset } = useForm({
        defaultValues: props.currentUser
    });
    // setValue() (constants changes inj edit items for form 'Edit')
    setValue("name", props.currentUser.name)
    setValue("username", props.currentUser.username)

    // Functions
    const onSubmit = (data) => {
        console.log(data);

        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)

        // Limpiar Campos
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <label>Name</label>
            <input type="text" name="name" {...register("name", {required: true})} />
            <div>{errors?.name && "Name es Requerido"}</div>

            <label>Username</label>
            <input type="text" name="username" {...register("username", {required: true}) } />
            <div>{errors?.username && "Username es Requerido"}</div>

            <br />
            <button>Edit user</button>
        </form>
    );
}
 
export default EditUserForm;
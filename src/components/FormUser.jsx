import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import './styles/FormUser.css'

const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, closeForm, setCloseForm }) => {



    const { register, reset, handleSubmit } = useForm()

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    const handleCloseForm = () => {
        setCloseForm(true)
        setUpdateInfo()
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        })
    }

    const submit = data => {
        if (updateInfo) {
            //UPDATE
            updateUserById('/users', updateInfo.id, data)
            setUpdateInfo()
        } else {
            //CREATE
            createNewUser('/users', data)
        }
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: ''
        })
    }

    return (
        <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close-form'}`}>
            <form onClick={e => e.stopPropagation() } className="formuser" onSubmit={handleSubmit(submit)}>
                <div onClick={handleCloseForm} className="formuser__close">x</div>
                <h2 className="formuser__title">{updateInfo ? 'Update User' : 'New User'}</h2>
                <div className="formuser__group">
                    <label htmlFor="first_name" className="formuser__label">First Name</label>
                    <input {...register("first_name")} type="text" id="first_name" className="formuser__input" />
                </div>
                <div className="formuser__group">
                    <label htmlFor="last_name" className="formuser__label">Last Name</label>
                    <input {...register("last_name")} type="text" id="last_name" className="formuser__input" />
                </div>
                <div className="formuser__group">
                    <label htmlFor="email" className="formuser__label">Email</label>
                    <input {...register("email")} type="email" id="email" className="formuser__input" />
                </div>
                <div className="formuser__group">
                    <label htmlFor="password" className="formuser__label">Password</label>
                    <input {...register("password")} type="password" id="password" className="formuser__input" />
                </div>
                <div className="formuser__group">
                    <label htmlFor="birthday" className="formuser__label">Birthday</label>
                    <input {...register("birthday")} type="date" id="birthday" className="formuser__input" />
                </div>
                <button className="formuser__btn">{updateInfo ? 'Update this user' : 'Add a new user'}</button>
            </form>
        </div>
    )
}

export default FormUser
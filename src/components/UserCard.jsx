import './styles/UserCard.css'

const UserCard = ({user, deleteUserById, setUpdateInfo, handleOpenForm}) => {

    const handleDelete = () => {
        deleteUserById('/users', user.id)
    }

    const handleUpdate = () => {
        setUpdateInfo(user)
        handleOpenForm()
    }

    return (
        <article className='user__container'>
            <h2 className='user__title'>{`${user.first_name} ${user.last_name}`}</h2>
            <hr  className='user__hr'/>
            <ul className='user__info'>
                <li>
                    <span className='user__title__span'>EMAIL </span>
                    <span><i className='bx bx-envelope'></i> {user.email}</span>
                </li>
                <li>
                    <span className='user__title__span'>BIRTHDAY </span>
                    <span><i className='bx bx-gift'></i> {user.birthday}</span>
                </li>
            </ul>
            <hr className='user__hr'/>
            <footer className='user__footer'>
                <button className='user__delete' onClick={handleDelete}><i className='bx bx-trash'></i></button>
                <button className='user__edit' onClick={handleUpdate}><i className='bx bx-pencil' ></i></button>
            </footer>
        </article>
    )
}

export default UserCard
import './index.css'


const ContactsList = (props) => {
    const {details} = props 
    const {firstName, lastName, picture} = details
    return(
        <li className="list-element">
            <img className='picture' src={picture} alt={firstName}/>
            <p className='name'>{firstName} {lastName}</p>
        </li>
    )
}

export default ContactsList
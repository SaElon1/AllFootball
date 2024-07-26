import './Notification.css'
const Notification = ({message}) => {
    if (message !== null){
    return (
        <div className= "confirmation">
            {message}
        </div>
    )
    }
}
export default Notification
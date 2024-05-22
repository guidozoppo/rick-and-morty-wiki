import './Error.css'
const Error = ( { message } ) => {

    return (
        <div className="error-container">
            <h2>
                {message}
            </h2>
        </div>
    )
}

export default Error;
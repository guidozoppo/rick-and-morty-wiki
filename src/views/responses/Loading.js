import "./Loading.css";

const Loading = ( {message} ) => {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <h2>{message}</h2>
        </div>
    )
}

export default Loading;
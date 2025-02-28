import notFoundImage from '/404.gif'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='container'>

        <div className="not-found">
            <img src={notFoundImage} alt="" />

        <h1>
            404 Not Found !
        </h1>
        <p>
            The page you are looking for is not found please check the URL or contact the developer.
        </p>

        </div>
    </div>
  )
}

export default NotFound
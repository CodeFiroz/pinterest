import './Pins.css'
import { Link } from "react-router-dom"


const Pins = ({img, id, title}) => {
  return (
    <>
    
      <div className="pin-card">
        <Link to={`/pin/${id}`} title={title}>
          <img src={img} alt="" />
        </Link>
      </div>

    </>
  )
}

export default Pins
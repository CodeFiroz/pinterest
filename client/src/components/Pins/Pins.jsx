import './Pins.css'
import { Link } from "react-router-dom"


const Pins = (props) => {
  return (
    <>
    
      <div className="pin-card">
        <Link to={`/pin/${props.id}`} title={props.title}>
          <img src={props.img} alt="" />
        </Link>
      </div>

    </>
  )
}

export default Pins
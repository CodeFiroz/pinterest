import './Pins.css'


const Pins = (props) => {
  return (
    <>
    
      <div className="pin-card">
        <a href="#">
          <img src={props.img} alt="" />
        </a>
      </div>

    </>
  )
}

export default Pins
import Pins from "../../components/Pins/Pins"

import pin1 from '/pins/1.jpg'
import pin2 from '/pins/2.jpg'
import pin3 from '/pins/3.jpg'
import pin4 from '/pins/4.jpg'
import pin5 from '/pins/5.jpg'
import pin6 from '/pins/6.jpg'
import pin7 from '/pins/7.jpg'
import pin8 from '/pins/8.jpg'
import pin9 from '/pins/9.jpg'
import pin10 from '/pins/10.jpg'


const SavedPin = () => {
  return (
    <>
     <div className="container">

        <div className="title">
            <h1>Saved Pins</h1>
        </div>

        <div className="pin-grid">
            
        <Pins img={pin1} />
            <Pins img={pin2} />
            <Pins img={pin3} />
            <Pins img={pin4} />
            <Pins img={pin5} />
            <Pins img={pin6} />
            <Pins img={pin7} />
            <Pins img={pin8} />
            <Pins img={pin9} />
            <Pins img={pin10} />
            <Pins img={pin1} />
            <Pins img={pin2} />
            <Pins img={pin3} />
            <Pins img={pin4} />
            <Pins img={pin5} />
            <Pins img={pin6} />
            <Pins img={pin7} />
            <Pins img={pin8} />
            <Pins img={pin9} />
            <Pins img={pin10} />
        </div>
    </div> 
    </>
  )
}

export default SavedPin

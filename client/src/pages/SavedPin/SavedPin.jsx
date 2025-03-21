import Pins from "../../components/Pins/Pins"
import { useState, useEffect } from "react"
import { mySaved } from '../../api/pins'
import Loader from "../../components/Loader/Loader"

const SavedPin = () => {

  const [pin, setPin] = useState([]);
  const [loading, setLoading] = useState(true);

    
  useEffect(() => {
      const pinInfo = async () => {
          try {
              const response = await mySaved();
              if (!response.success) {
                  alert(response.error);
                  return false;
              }

              setPin(response.pins);
              setLoading(false)
          } catch (error) {
              console.error("Error fetching pin details:", error);
          }
      };
      pinInfo();


  }, []);


  return (

    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">

        <div className="title">
            <h1>Saved Pins</h1>
        </div>

        <div className="pin-grid">
            
            
        {
              pin.map((pin, index) => (
                <Pins key={index} img={pin.image} id={pin._id} title={pin.title} />
              ))
          }

      
        </div>
    </div>
      )}
    </>
  )
}

export default SavedPin

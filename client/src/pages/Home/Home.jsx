import Pins from '../../components/Pins/Pins'
import { useState, useEffect } from 'react'
import { getAllPins } from '../../api/pins'

const Home = () => {

  const [pins, setPins] = useState([]); // ✅ Initialize as an array

  useEffect(() => {
    const getPins = async () => {
      try {
        const response = await getAllPins();

        if (!response.success) {
          alert(response.error);
          return;
        }

        setPins(response.pins || []); // ✅ Ensure it's an array
      } catch (error) {
        console.error("Error fetching pin details:", error);
      }
    };

    getPins();
  }, []);

  


  return (
    <>
      <div className="container">

        <div className="pin-grid">

          {
              pins.map((pin, index) => (
                <Pins key={index} img={pin.image} id={pin._id} title={pin.title} />
              ))
          }




        </div>

      </div>
    </>
  )
}

export default Home

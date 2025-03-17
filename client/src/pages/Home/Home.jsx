import Pins from '../../components/Pins/Pins'
import { useState, useEffect } from 'react'
import { getAllPins } from '../../api/pins'
import Loader from '../../components/Loader/Loader'

const Home = () => {
  const [pins, setPins] = useState([]); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPins = async () => {
      try {
        const response = await getAllPins();

        if (!response.success) {
          alert(response.error);
          return;
        }

        setPins(response.pins || []); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching pin details:", error);
        setLoading(false);
      }
    };

    getPins();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="pin-grid">
            {pins.map((pin, index) => (
              <Pins key={index} img={pin.image} id={pin._id} title={pin.title} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

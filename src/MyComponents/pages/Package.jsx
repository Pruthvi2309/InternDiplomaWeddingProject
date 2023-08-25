import React from 'react'
import { useParams } from 'react-router-dom';

function Package() {
    const { pname } = useParams();
    const [data,setData] = useState([]);
    const collectData = async () => {
        try {
          const response = await fetch('http://localhost:4000/package_details', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
      
          const responseData = await response.json(); // Parse the response JSON
          console.log('Response data from server:', responseData); // Debugging line
      
          setData(responseData); // Set the fetched data to the state
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
  useEffect(()=>{ 
    collectData();  
  },[]);
  return (
    <div>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <h2>Package Name</h2>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Package

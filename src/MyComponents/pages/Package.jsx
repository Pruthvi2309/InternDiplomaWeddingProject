import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { useParams } from 'react-router-dom';

function Package() {
  const { pname } = useParams();
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const collectData = async () => {
      try {
        const response = await fetch('http://localhost:4000/package_details', {
          method: 'post',
          body: JSON.stringify({ pname }),
          headers: { 'Content-Type': 'application/json' },
        });

        const responseData = await response.json();
        setData(responseData);

        if (responseData.length > 0) {
          const vendors = responseData[0]['pvendors'];
          const prices = responseData[0]['pprices'];
          const vendor_arr = vendors.split(',');
          const prices_arr = prices.split(',');

          // Combine vendor and price arrays into a single array of objects
          const combinedData = vendor_arr.map((vendor, index) => ({
            name: vendor,
            cost: parseFloat(prices_arr[index]),   // Parse prices as floats
          }));

          setArr(combinedData);

          // Calculate total cost
          const total = prices_arr.reduce((sum, price) => sum + parseFloat(price), 0);
          setTotalCost(total);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    

    collectData();
  }, [pname]);

  const remove = async () => {
    
    var id = event.target.id;
    console.log(id);
    const vendors = data[0]['pvendors'];
    const prices = data[0]['pprices'];
    var vendor_arr = vendors.split(',');
    var prices_arr = prices.split(',');
    console.log(vendor_arr);
    // var index = vendor_arr.indexOf(id);
    for(var i =0;i<vendor_arr.length;i++){
      if(vendor_arr[i]==id){
        vendor_arr.splice(i,1);
        prices_arr.splice(i,1);
      }
    }
    // vendor_arr =  vendor_arr.splice(index,1)
    console.log(vendor_arr);
    console.log(prices_arr);
    
    try {
     
      const response = await fetch('http://localhost:4000/remove_item', {
        method: 'post',
        body: JSON.stringify({pname,vendor_arr,prices_arr}),
        headers: { 'Content-Type': 'application/json' },
      });

    window.location.reload();
      

      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Wrapper>
      <div className='top-container'>
        {data.map((curElem) => (
          <div className='container' key={curElem.pid}>
            <div className='row'>
              <div className='col-md-12'>
                <h2>{curElem.pname}</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <table className='table table-striped'>
                  <thead>
                    <tr>
                      <th scope='col'>#</th>
                      <th scope='col'>Name</th>
                      <th scope='col'>Cost</th>
                      <th scope='col'></th>
                    </tr>
                  </thead>
                  <tbody>
                    {arr.map((curEle, index) => (
                      <tr key={index}>
                        <th scope='row'>{index + 1}</th>
                        <td>{curEle.name}</td>
                        <td>{curEle.cost}</td>
                        <td><button className='btn btn-primary remove-btn' id={curEle.name} onClick={remove}>Remove</button></td>
                        
                      </tr>
                    ))}
                    <tr>
                      <td>Total Cost </td>
                      <td></td>
                      <td>{totalCost}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .top-container{
    padding-top:90px;
    padding-bottom:80px;
  }
  .remove-btn{
    white-space: nowrap;
    background-color:#e61041;
    border-width:0;

}

.remove-btn:hover{
    background-color:#c30733;

}
`

export default Package

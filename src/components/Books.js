import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Books = (props) => {
const [data, setData] = useState([]);

useEffect(() => {
    const fetchData = async () => {
    const result = await axios(
        `https://reactasset.s3.ap-south-1.amazonaws.com/product.json`
      );
      console.log('data', result.data)
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
      <>
        Books
      </>
  )
} 
export default Books;

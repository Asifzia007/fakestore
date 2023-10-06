import React, { useEffect, useState } from "react";
import './App.css'

const API = "https://fakestoreapi.com/products";


const App = () => {
  const [users, setUsers] = useState([]);
  // let [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);


  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.length > 0) {
        setUsers(data);

      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  // const previous = () =>{
  //   if(page > 1){
  //     page = page - 1 ;
  //   setPage(page)
  //   console.log(page)
  //   }
  // } 

  // const next = () =>{
  //   console.log("hello")
  //   if(page < 1){
  //   page = page + 1;
  //   setPage(page)

  //   }
  // } 



  return (
    <>
      <h1>FAKE STORE</h1>
      <div className="product-container">


        {users.map((user) => (
          <div className="product-card" key={user.id}>

            <img src={user.image} alt={user.title} />
            <h2>{user.title}</h2>
            <hr />
            <p className="price-tag">Price: ${user.price}</p>
            <hr />
            <p className="category">Category: {user.category}</p>
            <hr />
            <p className="description">Description: {user.description}</p>
            <button>Order Now</button>
          </div>
        ))}
      </div>
      {/* <div className='buttons'>
         <button onClick={previous}>Previous</button>
         <button onClick={next}>Next</button>
        </div>
         */}





      {/* <div className='buttons'>
          {page > 1 && <button onClick={() => setPage(page - 1)}>Previous</button>}
          {page < totalPages && <button onClick={() => setPage(page + 1)}>Next</button>}
        </div> */}
        
    </>
  )
}
export default App;

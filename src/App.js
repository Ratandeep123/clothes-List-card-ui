import React, { useEffect, useState } from "react";
import "./App.css"


function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      // "https://jsonplaceholder.typicode.com/albums/1/photos"
      "https://fakestoreapi.com/products"
    );
    // const data = await response.json();
    setUsers(await response.json());
    // console.log(data)
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2 className="text-center mt-0 cat bg-warning p-4">Clothes Price and Rate list</h2>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {users.map((currElem) => {
            return (
              <div className="col-10 col-md-6 col-lg-4 mt-5 mx-0">
                <div className="card p-2">
                  <div className="d-flex align-items-center">
                    <div className="image">
                      <img className="rounded zoom"
                        src={currElem.image}
                        style={{ width: "100px", height: "100px" }}
                      ></img>
                    </div>
                    <div className="mt-3 w-75 border-start">
                      <h5 className="mb-0 mt-0 textLeft cat mb-2 ms-3">{currElem.category}</h5>
                      <h5 className="textLeft title ms-3">{currElem.title}</h5>
                      <div className="mt-2 ms-3 p-2 d-flex justify-content-between rounded text-white stats">
                        <div className="d-flex flex-column">
                          <span className="article">Article</span>
                          <span className="number1">{currElem.id}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="followers">Price </span>
                          <span className="number2">{currElem.price}</span>
                        </div>
                        <div className="d-flex flex-column">
                          <span className="rating">Ratings</span>
                          <span className="number3">{currElem.rating.rate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default App;
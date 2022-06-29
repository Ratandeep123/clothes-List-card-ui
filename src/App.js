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
    <header>
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#" tabindex="-1" aria-disabled="true">Product</a>
          </li>
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</header>
      <h2 className="text-center mt-5 cat bg-warning p-4">Clothes Price and Rate list</h2>
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
      <div className="row p-4 border border-top  mt-4" style={{backgroundColor:"#F3F2F0"}}>
      <div className="col-lg-4 text-center">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Article</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a className="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div className="col-lg-4 text-center">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Price</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a className="btn btn-secondary" href="#">View details »</a></p>
      </div>
      <div className="col-lg-4 text-center">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

        <h2>Rating</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a className="btn btn-secondary" href="#">View details »</a></p>
      </div>
    </div>
    </>
  );
}
export default App;
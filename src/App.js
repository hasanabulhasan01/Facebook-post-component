import { useEffect, useState } from "react";
import './App.css';
import FacebookPost from "./view/FacebookPost";

function App() {
  const [data, setData] = useState([])

  useEffect(function() {
    getDataFromAPI();
  }, []);
  
  function getDataFromAPI() {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((res) => setData(res.products))
  }

  if (!data.length) {
    return (
      <div className="loader">
        <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" />
      </div>
    );
  }

  console.log(data)

  return (
   <div className="mainContainer">
     {data.map(function (item) {
      return(
        <div>
          <FacebookPost thumbnail={item.thumbnail} title={item.title} brand={item.brand}
          category={item.category} price={item.price} stock={item.stock}
          discount={item.discountPercentage} description={item.description} images={[item.images]}/> 

        </div>
      
      )
      })}

    </div>
    
    
  );

}

export default App;

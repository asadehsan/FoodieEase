import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      <Carousal search={search} setSearch={setSearch} />
      <div className="container">
        {
          foodCat.length !== 0 ? foodCat.map((data) => {
            return (
              <div className="row mb-3" key={data._id}>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                {
                  foodItem.length !== 0
                    ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))).map(filterItems => {
                      return (
                        <div key={filterItems._id} className="col-12 col-md-6 col-lg-3">
                          <Card
                            foodItem={filterItems}
                            options={filterItems.options[0]}
                          />
                        </div>
                      )
                    })
                    : <div>No Such Data Found</div>
                }
              </div>
            )
          })
            : "No categories found"
        }
      </div>
      <Footer />
    </div>
  );
}

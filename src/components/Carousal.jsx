import React from "react";

export default function Carousal({ search, setSearch }) {
  return (
    <div className="carousel-container relative max-h-500">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value); }}
              />
            </div>
          </div>

          {/* First Carousel Item */}
          <div className="carousel-item active">
            <div className="carousel-placeholder" style={{ height: '500px', background: '#2c2c2c' }}></div>
            <img
              src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 carousel-img"
              alt="Burger"
              onLoad={(e) => { e.target.previousSibling.style.display = 'none'; }}
            />
          </div>

          {/* Second Carousel Item */}
          <div className="carousel-item">
            <div className="carousel-placeholder" style={{ height: '500px', background: '#2c2c2c' }}></div>
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 carousel-img"
              alt="Pizza"
              onLoad={(e) => { e.target.previousSibling.style.display = 'none'; }}
            />
          </div>

          {/* Third Carousel Item */}
          <div className="carousel-item">
            <div className="carousel-placeholder" style={{ height: '500px', background: '#2c2c2c' }}></div>
            <img
              src="https://images.unsplash.com/photo-1721032743032-23c46474d563?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block w-100 carousel-img"
              alt="Ramen"
              onLoad={(e) => { e.target.previousSibling.style.display = 'none'; }}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

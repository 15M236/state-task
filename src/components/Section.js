import React from 'react';
import Product from "./Product";
import './Style.css';

const products = [
    {
      name: "Product-1",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      category: "Fancy Product",
      price: "$80.00",
      oldprice: "$40.00",
      rating: 0,
      availableforsale: null,
      action: "View Options",
      qty: 0,
      isAdded: false
    },
    {
      name: "Product-2",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      category: "Special Item",
      price: "$18.00",
      oldprice: "$20.00",
      rating: 5,
      availableforsale: "sale",
      action: "Add to cart",
      qty: 0,
      isAdded: false
    },
    {
      name: "Product-3",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      category: "Sale Item",
      price: "$25.00",
      oldprice: "$50.00",
      rating: 0,
      availableforsale: "sale",
      action: "Add to cart",
      qty: 0,
      isAdded: false
    },
    {
      name: "Product-4",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      category: "Popular Item",
      price: "$40.00",
      oldprice: null,
      rating: 5,
      availableforsale: null,
      action: "Add to cart",
      qty: 0,
      isAdded: false
    },
  
    {
      name: "Product-5",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      category: "Fancy Product",
      price: "$25.00",
      oldprice: "$50.00",
      rating: 0,
      availableforsale: "sale",
      action: "Add to cart",
      qty: 0,
      isAdded: false
    },
    {
      name: "Product-6",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      category: "Special Item",
      price: "$280.00",
      oldprice: "$120.00",
      rating: 5,
      availableforsale: null,
      action: "View Options",
      qty: 0,
      isAdded: false
    },
    {
      name: "Product-7",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      category: "Sale Item",
      price: "$18.00",
      oldprice: "$20.00",
      rating: 5,
      availableforsale: "sale",
      action: "Add to cart",
      qty: 0,
      isAdded: false
    },
    {
      name: "Product-8",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      category: "Popular Item",
      price: "$40.00",
      oldprice: null,
      rating: 5,
      availableforsale: null,
      action: "Add to cart",
      qty: 0,
      isAdded: false
    }
  ];
export default function Section() {
    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {products.map((value) => {
                  return <Product value={value} />;
                })}
                </div>
            </div>
        </section>
    )
}
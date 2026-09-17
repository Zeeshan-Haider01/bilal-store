import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ProductCard from "../Components/ProductCard";

function Home(){
    let [products , setProducts] =  useState([])

    async function getProducts(){
        let response = await fetch('https://dummyjson.com/products');
        let data = await response.json(); 
        setProducts(data.products)
    }
    useEffect(()=> {
        getProducts();
    },[])

    return(
        <>
        <div style={{display:'flex',gap:'20px'}}>
            <h2>All Products</h2>
            <Link to='/add'><button>Add product</button></Link>
        </div>
        <div className="product-wrap">
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
        </>
    )   
}
export default Home
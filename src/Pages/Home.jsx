import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ProductCard from "../Components/ProductCard";
const url = import.meta.env.VITE_API_KEY_URL;

function Home(){
    let [products , setProducts] =  useState([])

    async function getProducts(){
        let response = await fetch(url);
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
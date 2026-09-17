import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct(){

    let navigate = useNavigate()

    let [name , setName] = useState("");
    let [price , setprice] = useState("");
    let [description , setDescription] = useState("");
    let [image , setImage] = useState("");

    async function CreateProduct(e){
        e.preventDefault()
        let data = {
            title: name, 
            price: price, 
            description: description, 
            thumbnail: image, 
        }
        let response = await fetch('https://dummyjson.com/products/add' , {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)  
        })
        navigate('/')
    }

    return(
        <>
            <h2>Add Product</h2>
            <form onSubmit={CreateProduct} >
                <div>
                    <label htmlFor="">Name</label>
                    <input 
                        type="text" 
                        name="name"  
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">price</label>
                    <input 
                        type="text" 
                        name="price"  
                        onChange={(e) => setprice(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <input 
                        type="text" 
                        name="description"  
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="">Image</label>
                    <input 
                        type="text" 
                        name="image"  
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <button type="submit"> Add product </button>
            </form>
        </>
    )
}

export default AddProduct;
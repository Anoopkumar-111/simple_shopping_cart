import { useState } from "react"
import ListItem from "./ListItems/ListItem"


// will send as prop with setState so that we can change its state
// const items = [
//     {
//         id: 0,
//         discountedPrice: 340,
//         price: 450,
//         title: "Title of the Item",
//         thumbnail: "cart.png"
//     }
// ]

const FormProducts = () => {

    /* onChange => when we are subscribing to such 
    events we receive and argument -> event
    */

    const[title,setTitle]=useState("");
    const[price,setPrice]=useState(0);
    const[discountedPrice,setDiscountedPrice]=useState(0);
    const[thumbnail,setThumbnail]=useState("");

    const[items,setItems]=useState({
        id: 0,
        discountedPrice: 340,
        price: 450,
        title: "Title of the Item",
        thumbnail: "cart.png"
    })


    /*
    controlled input  :  those in which value is passed as prop along with 
    allbackfunction that can change the value
    give value ={title}
    define useState hook title,setTitle

    title is the prop & its value can be changed by setTitle
    */ 
    const handleTitle=(event)=>{
        // console.log(event);
        // see target:input in console
        // so we can direct print it
        // console.log(event.target.value)
        setTitle(event.target.value)

    }

    
    const handlePrice=(event)=>{
        setPrice(event.target.value)
    }

    const handleDiscountedPrice=(event)=>{
        setDiscountedPrice(event.target.value)
    }

    const handleThumbnail=(event)=>{
        setDiscountedPrice(event.target.value)
    }


    return (
        <div className={"product-wrapper"} style={{background:"gray"}}>
            <div className={"form"}>
                <form>
                    <h2>Item Card Details</h2>

                    <div className={"input-field"}>
                        <label htmlFor="title">Title : </label>
                        <input 
                        type="text" 
                        placeholder="Enter Title" 
                        onChange={handleTitle} 
                        value={title}
                        />
                    </div>

                    <div className={"input-field"}>
                        <label htmlFor="price">Price : </label>
                        <input 
                        type="number" 
                        placeholder="Enter Price" 
                        onChange={handlePrice} 
                        value={price}
                        />
                    </div>

                    <div className={"input-field"}>
                        <label htmlFor="discountedPrice">Discounted Price : </label>
                        <input 
                        type="number" 
                        placeholder="Enter Discounted Price" 
                        onChange={handleDiscountedPrice} 
                        value={discountedPrice}
                        />
                    </div>
                    <div className={"input-field"}>
                        <label htmlFor="thumbnail">Thumbnail : </label>
                        <input 
                        type="text" 
                        placeholder="Enter Thumbnail name" 
                        onChange={handleThumbnail} 
                        value={thumbnail}
                        />
                    </div>


                </form>
            </div>

            <div>
                <div>
                    <ListItem data={items} />
                </div>
            </div>
        </div>
    )

}

export default FormProducts
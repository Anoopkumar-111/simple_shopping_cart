
import AddtoCartIcon from "../../../assets/icons/buyy.svg"
import { useState } from "react"

const CounterItem = ({data}) =>{

    // let message = "Not added to the Cart"

    const[message,setMessage]=useState("Not added to the Cart")

    const handleClick=()=>{
        // message = "Added to the Cart"s
        setMessage("Added to the Cart")
        console.log("Clicked!",message)
    }

    const[value,setValue]=useState(0);

    const onAdd=()=>{
        setMessage("Added to your Cart !")
        setValue(value+1);
        console.log(value);
    }

    const onSub=()=>{
        if(value<=0){
            setMessage("Not Added to the Cart ")
            return;
        }
        setValue(value-1);
        console.log(value);
    }

    


    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt={data.title}/>
            <div className={"item-card__information"} >
                <div className={"pricing"}>
                    <span>₹{data.discountedPrice}</span>
                    <small>
                        <strike>₹{data.price}</strike>
                    </small>
                </div>

                <div className={"title"}>
                    <h3>{data.title}</h3>
                </div>
            </div>

            <small className="cart-message">{message}</small>

            <button className={"cart-add"} onClick={onAdd}>
                <span>Add + +</span>
                <img src={AddtoCartIcon} alt ="add to cart" />
            </button>
            <div>Value is {value}</div>
            <button className={"cart-add"} onClick={onSub}>
                <span>Sub - -</span>
                <img src={AddtoCartIcon} alt ="add to cart" />
            </button>

        </div>
    )
}

export default CounterItem
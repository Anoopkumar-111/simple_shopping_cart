
import AddtoCartIcon from "../../../assets/icons/buyy.svg"

const ListItem = ({data}) =>{

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

            <button className={"cart-add"}>
                <span>Add to Cart</span>
                <img src={AddtoCartIcon} alt ="add to cart" />
            </button>
        </div>
    )
}

export default ListItem
import AddtoCartIcon from "../assets/icons/buyy.svg"

const ListItem = () =>{
    return (
        <div className={"item-card"}>
            <img className={"img-fluid"} src="assets\cart.png" alt="Some title"/>
            <div className={"item-card__information"} >
                <div className={"pricing"}>
                    <span>₹340</span>
                    <small>
                        <strike>450 </strike>
                    </small>
                </div>

                <div className={"title"}>
                    <h3>Title of the Item</h3>
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
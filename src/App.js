import ListItem from "./components/ListItem";

const App=()=>{
  return (
    <div >
      <ListItem data ={{
        discountedPrice:340,
        price:450,
        title:"Title of the Item",
        thumbnail:"cart.png"
    }}></ListItem>
    
      <ListItem data ={{
        discountedPrice:999,
        price:1999,
        title:"Title 2 of the Item",
        thumbnail:"cart.png"
    }}></ListItem>
    </div>
  );
}

export default App;

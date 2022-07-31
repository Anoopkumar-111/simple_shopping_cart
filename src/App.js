import Header from "./components/Layout/Header";
import SubHeader from "./components/Layout/SubHeader";
import FormProducts from "./components/Products/FormProduct";
import Products from "./components/Products/Products";


const App=()=>{
  return (
    <div >
      <Header/>
      <SubHeader/>
      <FormProducts/>
      <Products/>
    </div>
  );
}

export default App;

import "./App.css";
import data from "./data";
function App() {
  return (
    <div className='App'>
      <h1>products</h1>
      {data.products.map((product) => (
        <div>
          <img src={product.image} alt={product.image}></img>
        </div>
      ))}
    </div>
  );
}
// TODO react-routing and import data from laptop

export default App;

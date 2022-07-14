//import data from "../data";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function HomeScreen() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      const result = await axios.get("/api/products");
      setproducts(result.data);
    };
    fecthData();
  }, []);

  return (
    <div>
      <h1>Feacture Products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <p>{product.description}</p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;

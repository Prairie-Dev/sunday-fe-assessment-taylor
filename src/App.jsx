import "./App.css";
import { getProducts } from "./data/products";
import { convertToDollars } from "./data/currency";

function App() {
  const products = getProducts();

  // TODO: Implement state management for cart items

  // TODO: Implement handlers for adding/removing items and generating lawn plan

  // TODO: Calculate totals

  return (
    <div className="main-container">
      <div className="products-container">
        <h2>Customize Your Lawn Subscription</h2>
        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-card-details">
                <p>{product.name}</p>
                <p className="price">{convertToDollars(product.price)}</p>
              </div>
              <div className="product-card-actions">
                <button className="btn primary">Add to Subscription</button>
                <button className="btn secondary">Add one time</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cart">
        <h2>Recurring Items</h2>
        {/* TODO: Implement recurring items list */}
        <div className="empty-state">
          <p>No recurring items added yet</p>
        </div>

        <div className="one-time-items">
          <h3>One-Time Items</h3>
          {/* TODO: Implement one-time items list */}
          <div className="empty-state">
            <p>No one-time items added yet</p>
          </div>
        </div>

        <div className="totals">
          <div className="total">
            <h3>Total Today</h3>
            <p className="price">{convertToDollars(0)}</p>
          </div>
          <div className="total">
            <h3>Total Subscription Cost</h3>
            <p className="price">{convertToDollars(0)}</p>
          </div>
        </div>
        <button className="btn primary full-width">Generate Lawn Plan</button>
      </div>
      <div className="shipments">
        <h2>Shipments</h2>
        {/* TODO: Implement shipments list based on application dates */}
        <div className="empty-state">
          <p>Generate a lawn plan to see shipments</p>
        </div>
      </div>
    </div>
  );
}

export default App;

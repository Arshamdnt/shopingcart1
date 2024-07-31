import "./Header.css";

export default function Header({ onCartClick }) {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Store</li>
          </ul>
          <img src="./shoppingcart.png" alt="" id="shoppingcarticon" onClick={onCartClick} />
        </nav>
      </header>
    </div>
  );
}



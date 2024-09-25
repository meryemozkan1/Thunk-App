import { Link } from "react-router-dom";
import Container from "../Components/Container";
import { useSelector } from "react-redux";
import Loader from "../Components/Loader";
import Error from "./../Components/Error";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const cart = useSelector((store) => store.cart);

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>
      <div>
        {cart.isLoading ? (
          <Loader />
        ) : cart.error ? (
          <Error />
        ) : cart.data.length === 0 ? (
          <p className="flex flex-col items-center gap-3">
            Sepette her hangi bir ürün yok
            <Link
              className="border p-2 shadow rounded hoverÇbg-gray-100"
              to={"/"}
            >
              Ürün ekle
            </Link>
          </p>
        ) : (
          cart.data.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
    </Container>
  );
};

export default Cart;

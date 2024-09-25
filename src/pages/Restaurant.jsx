import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../redux/actions/productAction";
import { getRestaurants } from "../redux/actions/restaurantAction";
import Loader from "../Components/Loader";
import ResturantDetail from "../Components/ResturantDetail";
import Container from "../Components/Container";
import { FaFire } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import { addToBasket } from "../redux/actions/basketActions";
import Error from "../Components/Error";

const Restaurant = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  //İki afrklı reducera abone olma
  const productState = useSelector((store) => store.products);
  const { error, isLoading, restaurants } = useSelector(
    (store) => store.restaurants
  );

  useEffect(() => {
    dispatch(getProducts(id));
    dispatch(getRestaurants(id));
  }, []);

  const handleAdd = (item, found) => {
    found
      ? dispatch(updateItem(found.id, found.amount + 1))
      : dispatch(addToBasket(item, restaurants));
  };

  return (
    <div>
      <div className="shadow">
        <Container>
          <h1>
            {isLoading ? (
              <Loader />
            ) : (
              !error && <ResturantDetail data={restaurants} />
            )}
          </h1>
        </Container>
        <hr />
      </div>
      <Container>
        <div className="mb-6">
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            <FaFire className="text-red-500" />
            Popüler
          </h2>
          <p className="text-gray-600">
            Restoranın en çok tercih edilen ürünleri
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {productState.isLoading ? (
            <Loader />
          ) : productState.error ? (
            <Error />
          ) : (
            productState.products.map((item) => (
              <ProductCard key={item.id} item={item} handleAdd={handleAdd} />
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Restaurant;

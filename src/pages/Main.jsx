import { useDispatch, useSelector } from "react-redux";
import Container from "../Components/Container";
import RestaurantCard from "../Components/RestaurantCard";
import { useEffect } from "react";

import Loader from "../Components/Loader";
import Error from "../Components/Error";
import { getRestaurants } from "../redux/actions/restaurantAction";

const Main = () => {
  //* Resturant verilerine obone olmak için useSelector ü kullandık
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurants
  );

  const dispatch = useDispatch();
  //Verileri almak için Methıd
  const getData = () => {
    dispatch(getRestaurants());
  };
  //Sayfa yüklendiği anda restoran verilerini alacağımız methıd çalıştıtır.
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-3xl">Tüm Restorantlar</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error />
          ) : (
            restaurants.length > 0 &&
            restaurants.map((item) => (
              <RestaurantCard key={item.id} data={item} />
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default Main;

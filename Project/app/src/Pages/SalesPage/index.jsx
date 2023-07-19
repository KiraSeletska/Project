import styles from "./styles.module.css";
import { useGetAllPropductsQuery } from "../../redux/apiSlice";
import { Product } from "../../components/Product";
import { baseUrl } from "../../redux/apiSlice";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";
import { useState } from "react";
import { Filter } from "../../components/Filter";

export const SalesPage = () => {
  const { data } = useGetAllPropductsQuery();
  const dispatch = useDispatch();
  const [newData, setNewData] = useState();
  console.log(data);

  const addToBascetHandler = (event, el) => {
    //повтор!!!
    event.preventDefault();
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
  };
  const getNewData = (arg) => {
    setNewData(arg);
  };
  return (
    <div className={styles.wrapper}>
      <h2>Products with sale</h2>
      <Filter items={data !== undefined ? data : []} setNewData={getNewData} />
      <div className={styles.productsContainer}>
        {newData &&
          newData.map((el) =>
            el.discont_price ? (
              <NavLink key={el.id} to={`/products/${el.id}`}>
                <Product
                  key={el.id}
                  discont_price={el.discont_price}
                  price={el.price}
                  title={el.title}
                  image={baseUrl + el.image}
                  addToBascetHandler={(e) => addToBascetHandler(e, el)}
                />{" "}
              </NavLink>
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
};

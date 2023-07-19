import { useGetAllPropductsQuery } from "../../redux/apiSlice";
//import { Product } from "../Product";
import{ Product }from '../../components/Product'
import { baseUrl } from "../../redux/apiSlice";
import styles from "./products.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";
import { useState } from "react";
import { Filter } from "../../components/Filter";

export const AllProducts = () => {
  const { data } = useGetAllPropductsQuery();
  const dispatch = useDispatch();
  console.log(data);
  const [newData, setNewData] = useState();

  const addToBascetHandler = (event, el) => {
    event.preventDefault();
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
  };

  const getNewData = (arg) => {
    setNewData(arg);
  };
  return (
    <div className={styles.productsWrapper}>
      <h2>All products</h2>
      <Filter items={data !== undefined ? data : []} setNewData={getNewData} />
      {newData &&
        newData.map((el) => (
          <NavLink key={el.id} to={`/products/${el.id}`}>
            <Product
              key={el.id}
              image={baseUrl + el.image}
              price={el.price}
              discont_price={el.discont_price}
              title={el.title}
              addToBascetHandler={(e) => addToBascetHandler(e, el)}
            />
          </NavLink>
        ))}
    </div>
  );
};

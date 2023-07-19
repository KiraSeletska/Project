import styles from "./styles.module.css";
import { useGetOneCategoryQuery } from "../../redux/apiSlice";
import { NavLink, useParams } from "react-router-dom";
import { Product } from "../Product";
import { baseUrl } from "../../redux/apiSlice";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";
import { useEffect, useState } from "react";
import { Filter } from "../Filter";
import { useGetAllPropductsQuery } from "../../redux/apiSlice";

export const PropductsByCategory = () => {
  const { id } = useParams();
  const { data } = useGetOneCategoryQuery(id);
  //const { data } = useGetAllPropductsQuery();
  console.log(data);
  const [newData, setNewData] = useState();
  const dispatch = useDispatch();

  const addToBascetHandler = (event, el) => {
    //Может ее вынести куда-то? А то она много где повторяется
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
      <h2>Tools and equipment</h2>
      <Filter
        items={data !== undefined ? data.data : []}
        setNewData={getNewData}
      />
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

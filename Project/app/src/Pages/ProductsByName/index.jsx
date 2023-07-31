import styles from "./ProductsByName.module.css";
import { useGetAllPropductsQuery } from "../../redux/categoriesApi";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Product } from "../../components/Product";
import { baseUrl } from "../../redux/categoriesApi";
import { addProductToBasket } from "../../redux/basketSlice";
import { Search } from "../../components/Search";
import { useEffect, useState } from "react";

export const ProductsByName = () => {
  const { data, isLoading, error } = useGetAllPropductsQuery();

  const dispatch = useDispatch();
  const nameOfProdact = "a";
 
  const newData = [];

  const test = (name, array) => {
    const aaa = array?.map((el, ind) => {
      const stringLength = name.length;
      const newEl = el.title.slice(0, stringLength);
      if (newEl.toLowerCase() === name.toLowerCase()) {
        return newData.push(array[ind]);
      } else {
        return;
      }
    });
  };

  test(nameOfProdact, data && data);
  const addToBascetHandler = (event, el) => {
    event.preventDefault();
    dispatch(addProductToBasket(el));
  };

  return (
    <div className={styles.productsWrapper}>
      {newData &&
        newData.map((el) => (
          <NavLink key={el.id} to={`/products/${el.id}`}>
            <Product
              key={el.id}
              id={el.id}
              image={baseUrl + el.image}
              price={el.price}
              discont_price={el.discont_price}
              title={el.title}
              addToBascetHandler={(e) => addToBascetHandler(e, el)}
            />
          </NavLink>
        ))}
      <Search />
    </div>
  );
};

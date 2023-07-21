import styles from "./styles.module.css";
import { useGetAllPropductsQuery } from "../../redux/categoriesApi";
import { Product } from "../../components/Product";
import { baseUrl } from "../../redux/categoriesApi";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";
import { useState, useCallback } from "react";
import { Filter } from "../../components/Filter";
import { ApplyFilter } from "../../util/ApplyFilter";

export const SalesPage = () => {
  const { data } = useGetAllPropductsQuery();
  const dispatch = useDispatch();
  const [newData, setNewData] = useState();

  const addToBascetHandler = (event, el) => {
    event.preventDefault();
    const newProduct = { ...el, quantity: 1 };//вынести в слайс
    dispatch(addProductToBasket(newProduct));

  };

  const onFilterChanged = useCallback((filterObj) => {
    setNewData(ApplyFilter(data || [], filterObj))
  }, [data])

  return (
    <div className={styles.productsWrapper}>
      <h2>Products with sale</h2>
      <Filter onChange={onFilterChanged}/>
     
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
  );
};

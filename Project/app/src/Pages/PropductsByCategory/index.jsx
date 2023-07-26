import styles from "./styles.module.css";
import { useGetOneCategoryQuery } from "../../redux/categoriesApi";
import { NavLink, useParams } from "react-router-dom";
import { Product } from "../../components/Product";
import { baseUrl } from "../../redux/categoriesApi";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";
import { useEffect, useState, useCallback } from "react";
import { Filter } from "../../components/Filter";
import { ApplyFilter } from "../../util/ApplyFilter";

export const PropductsByCategory = () => {
  const { id } = useParams();
  const { data } = useGetOneCategoryQuery(id);

  const [newData, setNewData] = useState();
  const dispatch = useDispatch();

  const addToBascetHandler = (event, el) => {
    //Может ее вынести куда-то? А то она много где повторяется
    event.preventDefault();
   // const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(el));

  };
  const onFilterChanged = useCallback((filterObj) => {
    setNewData(ApplyFilter(data?.data || [], filterObj))
  }, [data])

  return (
    <section className={styles.wrapper}>
            <h2>Tools and equipment</h2>
      <Filter onChange={onFilterChanged}/>
    <div className={styles.productsWrapper}>

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
    </section>

  );
};

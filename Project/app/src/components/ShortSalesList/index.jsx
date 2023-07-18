import styles from "./styles.module.css";
import { useGetAllPropductsQuery } from "../../redux/apiSlice";
import { baseUrl } from "../../redux/apiSlice";
import { Product } from "../Product";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const ShortSalesList = () => {
  const { data } = useGetAllPropductsQuery();
  const [productsState, setProductsState] = useState(40);

  const oneStep = 600;

  const stepPlus = () => {
    if (productsState < -2360) return;
    const step = productsState - oneStep;
    setProductsState(step);
    console.log(productsState)
  };
  const stepMin = () => {
    if (productsState >=40) return;
    const step = productsState + oneStep;
    setProductsState(step);
  };

  return (
    <div className={styles.wrapper}>
      <h2>Sale</h2>
      <div className={styles.productsWrapper}>
        <button className={styles.btn} onClick={() => stepPlus()}>
          {">"}
        </button>
        <div
          className={styles.prodacts}
          style={{ transform: `translateX(${productsState}px)` }}
        >
          {data &&
            data.map((el) =>
              el.discont_price ? (
                <NavLink key={el.id} to={`/products/${el.id}`}>
                <Product
                  key={el.id}
                  discont_price={el.discont_price}
                  price={el.price}
                  title={el.title}
                  image={baseUrl + el.image}
                /> </NavLink>
              ) : (
                ""
              )
            )}
        </div>
        <button onClick={() => stepMin()}>{"<"}</button>
      </div>
    </div>
  );
};

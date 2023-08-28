import styles from "./ProductsByName.module.css";
import { useGetAllPropductsQuery } from "../../redux/categoriesApi";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Product } from "../../components/Product";
import { baseUrl } from "../../redux/categoriesApi";
import { addProductToBasket } from "../../redux/basketSlice";

export const ProductsByName = () => {
  const { data, isLoading, error } = useGetAllPropductsQuery();

  const dispatch = useDispatch();
  const nameOfProdact = useSelector((state) => state.basket.search);

  const newData = [];

  (function (name, array) {
    array?.map((el, ind) => {
      const stringLength = name.length;
      const newEl = el.title.slice(0, stringLength);
      newEl.toLowerCase() === name.toLowerCase() && newData.push(array[ind]);
    });
  })(nameOfProdact, data);

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
    </div>
  );
};

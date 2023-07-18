import { useGetAllPropductsQuery } from "../../redux/apiSlice";
import { Product } from "../Product";
import { baseUrl } from "../../redux/apiSlice";
import styles from "./products.module.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";

export const AllProducts = () => {
  const { data } = useGetAllPropductsQuery();
  const { id } = useParams();
  const dispatch = useDispatch();

  const addToBascetHandler = (event, el) => {
    event.preventDefault();
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
  };

  return (
    <div className={styles.productsWrapper}>
          <h2>All products</h2>
            <div className={styles.sortContainer}>
                <span className={styles.spanPrice}>Price</span>
                <input  type="text" placeholder='trom'
                className={styles.inputSort}/>
                <input  type="text" placeholder='to'
                className={styles.inputSort}/>
                <span className={styles.discSort}> Discount items</span>
                <input className={styles.checkbox} type="checkbox" />
                <span className={styles.spanSorted}>Sorted</span>
                <input type="text" placeholder='by default'
                className={styles.inputSortByDefault} />
            </div>
      {data &&
        data.map((el) => (
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

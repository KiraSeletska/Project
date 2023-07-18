import styles from './styles.module.css'
import { useGetAllPropductsQuery } from "../../redux/apiSlice";
import { Product } from "../Product";
import { baseUrl } from "../../redux/apiSlice";
import { NavLink } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { countTotalPrice } from "../../redux/basketSlice";

export const SalesPage = () => {
    const { data } = useGetAllPropductsQuery();
    const dispatch = useDispatch();

    const addToBascetHandler = (event, el) => {
      event.preventDefault();
      const newProduct = { ...el, quantity: 1 };
      dispatch(addProductToBasket(newProduct));
      dispatch(countTotalPrice());
    };

    return(
        <div className={styles.wrapper}>
            <h2>Products with sale</h2>
            <div className={styles.sortContainer}>
                <span className={styles.spanPrice}>Price</span>
                <input  type="text" placeholder='trom'
                className={styles.inputSort}/>
                <input  type="text" placeholder='to'
                className={styles.inputSort}/>
                <span className={styles.spanSorted}>Sorted</span>
                <input type="text" placeholder='by default'
                className={styles.inputSortByDefault} />
            </div>
       <div className={styles.productsContainer}>
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
                  addToBascetHandler={(e) => addToBascetHandler(e, el)}
                /> </NavLink>
              ) : (
                ""
              )
            )}
        </div>
        </div>
 
    )
}
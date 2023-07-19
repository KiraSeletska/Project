import styles from './styles.module.css'
import {  useGetOneCategoryQuery} from '../../redux/apiSlice'
import { NavLink, useParams } from 'react-router-dom'
import { Product } from "../Product";
import { baseUrl } from "../../redux/apiSlice";
import { useDispatch } from 'react-redux'
import { addProductToBasket
} from "../../redux/basketSlice";
import {
 countTotalPrice } from "../../redux/basketSlice";
 
export const PropductsByCategory = () => {
    const { id } = useParams();
    const { data } =  useGetOneCategoryQuery(id);

  const dispatch = useDispatch()

  const addToBascetHandler = (event, el) => {//Может ее вынести куда-то? А то она много где повторяется
    event.preventDefault()
    const newProduct = { ...el, quantity: 1 };
    dispatch(addProductToBasket(newProduct));
    dispatch(countTotalPrice());
  }

    return(
        <div className={styles.wrapper}>
           <h2>Tools and equipment</h2>
            <div className={styles.sortContainer}>{/* Форму для фильтра тоже вынести вместе с логикой? А как быть с чекбоксом, который вставлен посредине и там есть, а так нет? */}
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
        data.data.map((el) => (
          <NavLink key={el.id} to={`/products/${el.id}`}>
          <Product
            key={el.id}
            image={baseUrl + el.image}
            price={el.price}
            discont_price={el.discont_price}
            title={el.title}
            addToBascetHandler={(e)=>
              addToBascetHandler(e, el)}
          />
             </NavLink>
        ))}
        </div>
    )
}
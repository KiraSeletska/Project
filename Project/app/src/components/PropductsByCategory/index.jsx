import styles from './styles.module.css'
import {  useGetOneCategoryQuery} from '../../redux/apiSlice'
import { NavLink, useParams } from 'react-router-dom'
import { Product } from "../Product";
import { baseUrl } from "../../redux/apiSlice";

export const PropductsByCategory = () => {
    const { id } = useParams();
    const { data, error, isLoading } =  useGetOneCategoryQuery(id);
  console.log(data && data.data)

    return(
        <div className={styles.wrapper}>
          {data &&
        data.data.map((el) => (
          <NavLink key={el.id} to={`/products/${el.id}`}>
          <Product
            key={el.id}
            image={baseUrl + el.image}
            price={el.price}
            discont_price={el.discont_price}
            title={el.title}
          />
             </NavLink>
        ))}
        </div>
    )
}
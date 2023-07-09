import { useGetAllPropductsQuery } from "../../redux/apiSlice";
import { Product } from "../Product";
import { baseUrl } from "../../redux/apiSlice";
import styles from './products.module.css'
import { NavLink, useParams } from 'react-router-dom'

export const AllProducts = () => {
  const { data } = useGetAllPropductsQuery();
  const { id } = useParams()
 // console.log(data);

  return (
    <div className={styles.productsWrapper}>
 
      {data &&
        data.map((el) => (
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
  );
};

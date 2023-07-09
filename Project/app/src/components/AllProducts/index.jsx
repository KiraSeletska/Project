import { useGetAllPropductsQuery } from "../../redux/apiSlice";
import { Product } from "../Product";
import { baseUrl } from "../../redux/apiSlice";
import styles from './products.module.css'


export const AllProducts = () => {
  const { data } = useGetAllPropductsQuery();
 // console.log(data);

  return (
    <div className={styles.productsWrapper}>
    
      {data &&
        data.map((el) => (
          <Product
            key={el.id}
            image={baseUrl + el.image}
            price={el.price}
            discont_price={el.discont_price}
            title={el.title}
          />
        ))}
    </div>
  );
};

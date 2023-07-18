import styles from "./styles.module.css";
import { useGetAllCategoriesQuery } from "../../redux/apiSlice";
import { baseUrl } from "../../redux/apiSlice";
import { Category } from "../Category";
import { NavLink } from "react-router-dom";

export const SmallCataloge = () => {
  const { data } = useGetAllCategoriesQuery();

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <h2>Catalog</h2>
      <button><NavLink to="/categories">All cataloges</NavLink></button>
      </div>
      <div className={styles.categoriesWrapper}>
        {data &&
          data.map(
            (el) =>
              el.id <= 4 && (
                <NavLink key={el.id} to={`/categories/${el.id}`}> 
                <Category
                  key={el.id}
                  title={el.title}
                  image={baseUrl + el.image}
                /></NavLink>
              )
          )}
      </div>
    </div>
  );
};

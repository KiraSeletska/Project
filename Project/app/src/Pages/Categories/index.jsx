import { useGetAllCategoriesQuery } from "../../redux/apiSlice";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { Category } from "../../components/Category";
import { baseUrl } from "../../redux/apiSlice";

export const Categories = () => {
  const { data } = useGetAllCategoriesQuery();

  return (
    <div className={styles.wrapper}>
      <h2>Categories</h2>
      <div className={styles.categoriesWrapper}>
        {data &&
          data.map((el) => (
            <NavLink to={`/categories/${el.id}`}>
              <Category
                key={el.id}
                title={el.title}
                image={baseUrl + el.image}
              />
            </NavLink>
          ))}
      </div>
    </div>
  );
};

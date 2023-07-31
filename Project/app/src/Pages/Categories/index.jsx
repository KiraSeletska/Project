import { useGetAllCategoriesQuery, baseUrl } from "../../redux/categoriesApi";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";
import { Category } from "../../components/Category";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const Categories = () => {
  const { data, isLoading, error } = useGetAllCategoriesQuery();
console.log(data)
  return (
    <div className={styles.wrapper}>
      <h2>Categories</h2>
      {isLoading ? (
        <h2>LOADING <FontAwesomeIcon icon={faSpinner} spinPulse /></h2>
      ) : error ? (
        <h2>Error: {error.error}</h2>
      ) : (
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
         )}
    </div>
  );
};

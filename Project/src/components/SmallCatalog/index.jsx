import styles from "./styles.module.css";
import { useGetAllCategoriesQuery, baseUrl } from "../../redux/categoriesApi";
import { Category } from "../Category";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const SmallCataloge = () => {
  const { data, isLoading, error } = useGetAllCategoriesQuery();

  return (
    <div className={styles.wrapper}>
      <div className={styles.headContainer}>
        <h2>Catalog</h2>
        <button>
          <NavLink to="/categories">All categories</NavLink>
        </button>
      </div>
      {isLoading ? (
        <h2>
          LOADING <FontAwesomeIcon icon={faSpinner} spinPulse />
        </h2>
      ) : error ? (
        <h2>Error: {error.error}</h2>
      ) : (
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
                    />
                  </NavLink>
                )
            )}
        </div>
      )}
    </div>
  );
};

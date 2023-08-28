import styles from "./styles.module.css";
import { useGetOneCategoryQuery } from "../../redux/categoriesApi";
import { NavLink, useParams } from "react-router-dom";
import { Product } from "../../components/Product";
import { baseUrl } from "../../redux/categoriesApi";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../redux/basketSlice";
import { useState, useCallback } from "react";
import { Filter } from "../../components/Filter";
import { ApplyFilter } from "../../util/ApplyFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const PropductsByCategory = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetOneCategoryQuery(id);

  const [newData, setNewData] = useState();
  const dispatch = useDispatch();

  const addToBascetHandler = (event, el) => {
    event.preventDefault();
    dispatch(addProductToBasket(el));
  };
  
  const onFilterChanged = useCallback((filterObj) => {
    setNewData(ApplyFilter(data?.data || [], filterObj))
  }, [data])

  return (
    <div className={styles.wrapper}>
         <h2>{data?.category.title}</h2>
         {/*<h2>{data && data.category.title}</h2>*/}
      <Filter onChange={onFilterChanged}/>
      {isLoading ? (
        <h2>LOADING <FontAwesomeIcon icon={faSpinner} spinPulse /></h2>
      ) : error ? (
        <h2>Error: {error.error}</h2>
      ) : (
    <div className={styles.productsWrapper}>

      {newData &&
        newData.map((el) => (
          <NavLink key={el.id} to={`/products/${el.id}`}>
            <Product
              key={el.id}
              id={el.id}
              image={baseUrl + el.image}
              price={el.price}
              discont_price={el.discont_price}
              title={el.title}
              addToBascetHandler={(e) => addToBascetHandler(e, el)}
            />
          </NavLink>
        ))}
    </div>
        )}
    </div>

  );
};

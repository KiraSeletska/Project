import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ProductsByName } from "../../Pages/ProductsByName";
import { useGetAllPropductsQuery } from "../../redux/categoriesApi";
import styles from './search.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

export const Search = () => {

    const { data, isLoading, error }  = useGetAllPropductsQuery();

const [nameOfProdact, setnameOfProdact] = useState()

  return (
    <div className={styles.wrapper}>
      <div className={styles.inputDiv}>
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <NavLink to="/productsSearch">
        <input type="text" placeholder="Saerch..."
        onChange={(e)=>setnameOfProdact(e.target.value)}/>
      </NavLink>
 <button>{<FontAwesomeIcon icon={faXmark} />}</button>
      </div>
    </div>
  );
};

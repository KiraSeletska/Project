import styles from './styles.module.css'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping}from '@fortawesome/free-solid-svg-icons'

export const AddButtonForCatalogies = ({id, addToBascetHandler}) => {
    const basketImage =<FontAwesomeIcon icon={faCartShopping} bounce style={{color: "#393",}} />
    const defButtonText = "Add to cart";
    const [btnName, setBtnName] = useState(defButtonText)
  
    const onButtonClick = (event) => {
      addToBascetHandler(event);
      setBtnName( basketImage );
      setTimeout(() => setBtnName(defButtonText), 1000);
    }
    return(
        <button id={id} className={styles.addToCard} 
        onClick={onButtonClick}>
          {btnName}
        </button>
    )
}
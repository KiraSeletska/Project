import styles from './BascketIsEmpty.module.css'
import bascket from '../../images/shopingcard.png'
import { NavLink } from "react-router-dom";

export const BascketIsEmpty = () =>{
    return(
        <div className={styles.wrapper}>
            <img src={bascket} alt="Bascket is empty" />
            <p>EMPTY</p>
            <NavLink to="/products">
            Go shopping...
          </NavLink>
        </div>
    )
}
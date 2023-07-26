import styles from './productQuantity.module.css'
import { useSelector } from "react-redux";

export const ProductQuantity = ({id}) => {
    const totalProducts = useSelector((state) => state.basket.products);
    const productInBasket = (idEl) => totalProducts.find((el) => el.id === idEl)?.quantity

return(
    <p className={styles.inBascetCount}>{productInBasket(id) 
        ? "In basket: " + productInBasket(id) :
         ''}</p>
)
}
import styles from "./clearBasketButton.module.css"
import { useDispatch } from "react-redux";
import { clearBasket } from "../../redux/basketSlice";
import delet from "../../images/Close.svg";

export const ClearBasketButton = () => {
    const img = delet
    const dispatch = useDispatch();
    return(
        <div className={styles.container}>
        <button  
        onClick={()=>dispatch(clearBasket())}
        className={styles.btnflip} 
        data-back="Clear basket?" 
        data-front='Clear'></button>
        </div>

    )
}
import styles from './addToCardMessages.module.css'

export const AddToCardMessages = ({status}) => {
    return(
        <p className={status ? styles.text : styles.close}>Product added to cart</p>
    )
}
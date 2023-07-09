import styles from './styles.module.css'

export const Category = ({image, title}) => {
    return(
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
            <img src={image} alt="" />
            </div>
            <p>{title}</p>
        </div>
    )
}
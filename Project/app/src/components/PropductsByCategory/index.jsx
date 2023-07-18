import styles from './styles.module.css'
import { useGetOneProductByCategoryQuery, useGetAllPropductsQuery } from '../../redux/apiSlice'
import { useParams } from 'react-router-dom'

export const PropductsByCategory = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetOneProductByCategoryQuery(2);
  console.log(data)

    return(
        <div className={styles.wrapper}>
            PropductsByCategory
        </div>
    )
}
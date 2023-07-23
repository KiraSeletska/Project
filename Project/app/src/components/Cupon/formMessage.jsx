import { useState } from 'react'
import styles from './formMessage.module.css'

export const FormMessage = ({status}) => {
const [actualStatus, setActualStatus] = useState()

    return(
        <p className={!status ? styles.display : styles.nonDislpay}>
            Invalid phone number. Example: +49999999999
        </p>
    )
}
import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';

export const UpDownButton = () => {
    const up = () =>{
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
      const down = () =>{
        window.scroll({
            top: 1000000000,
            left: 0,
          behavior: 'smooth',
        });
      }
    return(
        <div className={styles.buttonContainer}>
        <button className={styles.up} onClick={()=>up()}> <FontAwesomeIcon icon={faAnglesUp} /></button>
        <button className={styles.down} onClick={()=>down()}> <FontAwesomeIcon icon={faAnglesDown} /></button>
        </div>

    )
}
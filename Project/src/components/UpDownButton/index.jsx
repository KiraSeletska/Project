import styles from './styles.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export const UpDownButton = () => {

  const [showScrollBtn, setShowScrollBtn] = useState(false)

    const up = () =>{
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      }
    

      const handleScroll = () => {
        const isScrolledDown = window.scrollY > 100;
        setShowScrollBtn(isScrolledDown);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return(
      <>{showScrollBtn &&
              <div className={styles.buttonContainer}>
        <button className={styles.up} onClick={()=>up()}> <FontAwesomeIcon icon={faAnglesUp} /></button>
        </div>}
      </>


    )
}
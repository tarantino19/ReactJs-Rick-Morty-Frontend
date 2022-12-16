import React from 'react';
import styles from './Cards.module.scss'


const Cards = ({results}) => {
  let display;

  if (results) {
    display = results.map ((result) => {
      const {id, name, status, species, gender, location, image } = result;
      
      return <div key={id} className="col-4 position-relative mb-4">
        <div className={styles.cards}>
          <img src={image} alt={name} className={`${styles.img} img-fluid mb-2`} />  
          <div className={`${styles.contentPadding} content`}>
            <div className="fs-5 fw-bold mb-3">{name}</div>
            <div className="">Gender: {gender}</div>
            <div className="">Specie: {species}</div>
          </div>
          <div className="ps-.5 ms-2 location mt-2 pe-1">
          <div className="fs-6"><i>Last Seen Location:</i></div>
          <div className="fs-5 pb-3 fw-bold">{location.name}</div>
          </div>
        </div>

        {(() => {
          if (status === "Dead") {
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-danger`}
              >
                {status}
              </div>
            );
          } else if (status === "Alive") {
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-success`}
              >
                {status}
              </div>
            );
          } else {
            return (
              <div
                className={`${styles.badge} position-absolute badge bg-secondary`}
              >
                {status}
              </div>
            );
          }
        })()}

      </div> 
      //main end div
    })
  } else {
    display = 'No Luck Looking for Characters... Yet';
  }

  return (<>
    {display}
    </>
  );
}

export default Cards;



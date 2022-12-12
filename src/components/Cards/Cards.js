import React from 'react';
import styles from './Cards.module.scss'


const Cards = ({results}) => {
  let display;

  if (results) {
    display = results.map ((result) => {
      const {id, name, status, species, gender, location, image } = result;
      
      return <div key={id} className="col-4 position-relative mb-4">
        <div className={styles.cards}>
          <img src={image} alt={name} className={`${styles.img} img-fluid`} />  
          <div className={`${styles.contentPadding} content`}>
            <div className="fs-5 fw-bold mb-3">{name}</div>
            <div className="">
              <div className="fs-6"><i>Last Seen Episode:</i></div>
              <div className="fs-5 pb-3">{location.name}</div>
            </div>
            <div className="">Gender: {gender}</div>
            <div className="">Specie: {species}</div>
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
    display = 'No Characters Found';
  }

  return (<>
    {display}
    </>
  );
}

export default Cards;

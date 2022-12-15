import React from 'react'
import { FilterButton } from '../FilterButton';

export const Gender = ({setPageNumber, setGender}) => {
  let genders = ["male", "female", "genderless", "unknown"];

  return (<>
    <div className="accordion-item">
    <h2 className="accordion-header fs-6" id="headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
            {genders.map ((items, index) => {
              return <FilterButton
              name="gender"
              task={setGender}
              setPageNumber={setPageNumber}
              key={index} index={index} items={items} />
            })}
      </div>
    </div>
  </div>
    </>

  )
}

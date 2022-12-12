import React from 'react'
import { FilterButton } from '../FilterButton';

export const Status = () => {
  return (<>
    <div className="accordion-item">
    <h2 className="accordion-header fs-6" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
          <FilterButton />
      </div>
    </div>
  </div>
    </>
  )
}

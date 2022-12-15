import React from 'react'
import { FilterButton } from '../FilterButton';

export const Status = ({setStatus, setPageNumber}) => {
  let status = ["Alive", "Dead", "Unknown"]

  return (<>
    <div className="accordion-item mt-4">
    <h2 className="accordion-header fs-6" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
          {status.map ((items, index) => {
              return <FilterButton key={index} name="status" index={index} items={items} 
              setPageNumber={setPageNumber}
              task={setStatus}
          />
          })}
      </div>
    </div>
  </div>
    </>
  )
}

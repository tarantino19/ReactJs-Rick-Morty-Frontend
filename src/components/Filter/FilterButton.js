import React from 'react'

export const FilterButton = () => {
  return (
    <div>
    <div className="form-check">
  <input 
  className="form-check-input" 
  type="radio" 
  name="exampleRadios" 
  id="exampleRadios1" 
  value="option1" 
  checked />
  <label className="btn btn-outline-primary" for="btn-check-outlined">
    Default radio
  </label>
</div>
<div classNameName="form-check">
  <input className="form-check-input" 
  type="radio" 
  name="exampleRadios" 
  id="exampleRadios2" 
  value="option2" />
  <label className="btn btn-outline-primary" for="btn-check-outlined">
    Default radio
  </label>
</div>
    </div>
  )
}

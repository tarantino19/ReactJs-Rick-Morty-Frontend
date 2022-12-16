import React from 'react';

const InputGroup = ({total, name, setId}) => {

  return (
    <div>
    <div class="input-group mb-3">
    <select class="form-select" id={name}
    onChange={(e)=> {
      setId (e.target.value)
    }}
    >
      <option value="1" selected>Choose...</option>

      {[...Array (total).keys ()].map ((number) => {
        return (<>
          <option value={number + 1}> 
          {name} - {number + 1}
          </option>
          </>)
      })}

    </select>
  </div>
    </div>
  );
}

export default InputGroup;

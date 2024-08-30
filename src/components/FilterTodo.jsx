import React from 'react'

const FilterTodo = ({currentFilter,onSet}) => {
  const list = ["all","completed","active"]
  return (
    <div>
       { list.map((criteria,i) => <button style={{margin: "10px"}}
                                    onClick={()=>onSet(criteria)} 
                                    key={i}  
                                    className={currentFilter == criteria? "button-active":null}
                                    > 
                                    {criteria}
                                  </button>)
       }
    </div>
  )
}

export default FilterTodo
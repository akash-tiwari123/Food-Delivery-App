import React from "react"

const InputAddToCart=React.forwardRef((items, ref)=>{
    return(
        <div>
            <label htmlFor={items.input.id}>{items.label}</label>
            <input ref={ref} {...items.input} />
        </div>
    )
})
export default InputAddToCart
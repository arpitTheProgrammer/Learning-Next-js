"use client"
const ProductBtn = ({title}) => {
    return(
        <div>
            <button onClick={()=> alert("this is :" + title)}>Click Me</button>
        </div>
    )
}

export default ProductBtn
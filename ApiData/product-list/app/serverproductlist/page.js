import ProductBtn from './productbtn'
const productList = async () =>{
    const response = await fetch("https://dummyjson.com/products")
    const data = await response.json()
    return data.products
}
const Page = async () => {
    let products = await productList();
    console.log(products);
    
    return(
        <div>
            <h1>Server Product List</h1>
            {
                products.map((item) => (
                    <div key={item.id}>
                        <h3 >Title: {item.title} Price: {item.price}</h3>
                        <ProductBtn title={item.title}/>
                    </div>
                ))
            }
        </div>
    )
}

export default Page
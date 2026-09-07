const getUsers = async (id)=>{
    let data = await fetch(`http://localhost:3000/api/users/${id}`)
    data = await data.json();
    return data.result;
}
const Page = async({params})=>{
    const {userId} = await params
    console.log(userId);
    const user = await getUsers(userId)
    console.log(user);
    
    
    return(
        <div>
            <h2>User Details</h2>
            <h3>ID: {user.id}</h3>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <h3>Email: {user.email}</h3>
        </div>
    )
}
export default Page;
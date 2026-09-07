import Link from "next/link";
import './../style.css'
const getUsers = async ()=>{
    let data = await fetch("http://localhost:3000/api/users/")
    data = await data.json();
    return data;
}
const Page = async() => {
    let users = await getUsers()
    // console.log(users);
    
    return(
        <>
        <h1>User List</h1>
        {
            users.map((item)=> (
                <div className="user-item">
                    {/* {item.name} */}
                    <span><Link href={`/users/${item.id}`}>{item.name}</Link></span>
                    <span><Link href={`/users/${item.id}/update`}>Edit</Link></span>
                </div>
            ))
        }
        </>
    )
}
export default Page;
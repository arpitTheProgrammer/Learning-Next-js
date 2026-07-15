import getUser from "@/services/getUser"
import Link from "next/link";
const Page = async() => {
    const getUserList = getUser()
    const users = await getUserList
    console.log(users);
    
    return(
        <div>
            <h1>Users List</h1>
            {
                users.map((user)=> (
                    <h2>
                        <Link href={`/users/${user.id}`}>{user.name}</Link>
                    </h2>
                ))
            }
        </div>
    )
}

export default Page
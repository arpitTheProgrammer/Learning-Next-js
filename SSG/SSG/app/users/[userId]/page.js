import getUser from "@/services/getUser"
const Page = async({params}) => {
    const {userId} = await params
    const getUserList = getUser();
    const users = await getUserList
    console.log(userId);
    console.log(users[userId-1]);
    const currUserData = users[userId-1]
    
    
    return(

        <div>
            <h1>User Detail Page</h1>
            <h2>Name: {currUserData.name}</h2>
            <h2>City: {currUserData.city}</h2>
            <h2>Phone: {currUserData.phone}</h2>
            <h2>Website: {currUserData.website}</h2>
        </div>
    )
}

export default Page

export async function generateStaticParams(){
    const getUserList = getUser()
    const users = await getUserList
    return users.map(user => ({
        userId:user.id.toString()
    }))
}
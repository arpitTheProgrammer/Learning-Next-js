import Link from "next/link"

const StudentList = () => {
    return(
        <div>
            <h1>Student List</h1>
            <ul>
                <li>
                    <Link href="studentlist/anil">Anil</Link>
                </li>
                <li>
                    <Link href="studentlist/aman">Aman</Link>
                </li>
                <li>
                    <Link href="studentlist/arpit">Arpit</Link>
                </li>
                <li>
                    <Link href="studentlist/shubham">Shubham</Link>
                </li>
            </ul>
        </div>
    )
}

export default StudentList
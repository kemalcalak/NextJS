import Link from "next/link";

export default  function NotFound(){
    return(
        <div>
            <h1>Not Found 😥</h1>
            <p>This page could not find</p>
            <Link href='/'>Home Page</Link>
        </div>
    )
}

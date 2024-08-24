import {useRouter} from "next/router";

export  default  function SuggestDetail(p){
    const router=useRouter()
    return(
        <div>
            <h1>Suggest Detail</h1>
            {JSON.stringify(router.query.id)}
            {JSON.stringify(router.query.q)}
            {JSON.stringify(router.query.ad)}


        </div>
    )
}

const mockF=()=>{
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2)
        },2000)
    })
}
export default async function Page(){
    const r=await  mockF()
    return(
        <div>
            İts Main Page
        </div>
    )
}

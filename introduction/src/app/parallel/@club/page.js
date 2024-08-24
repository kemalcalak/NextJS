const mockF=()=>{
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2)
        },8000)
    })
}
export default async function Page(){
    const r=await  mockF()
    return(
        <div>
            Club Page
        </div>
    )
}

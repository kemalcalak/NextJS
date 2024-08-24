const mockF=()=>{
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2)
        },5000)
    })
}
export default async function Page(){
    const r=await  mockF()
      //  throw  new Error("Hata")
    return(
        <div>
            Members Page
        </div>
    )
}

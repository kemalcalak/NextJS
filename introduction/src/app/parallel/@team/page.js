const mockF=()=>{
    return new  Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2)
        },5000)
    })
}
export default async function Page(){
    console.log('page')
    const r=await  mockF()
    if(Math.round(Math.random()*10+1)%2===0){
        throw  new Error("Hata")
    }

    return(
        <div>
            Team Page
        </div>
    )
}

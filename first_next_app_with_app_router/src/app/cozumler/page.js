import Link from "next/link";

const datas= [
    {
        id:1,
        name:'Çözüm 1'
    },
    {
        id:2,
        name:'Çözüm 2'

    },
    {
        id:3,
        name:'Çözüm 3'
    },
    {
        id:4,
        name:'Çözüm 4'
    }
]

const Cozumler=()=>{

    return(
        <div className='cozumlerPage'>
                <div className='cozumler'>
                    {datas.map((item)=>{
                        return(
                            <div key={item.id} className='cozumItem'>
                                <Link href={`/cozumler/${item.id}`}>
                                    {item.name}
                                </Link>
                            </div>
                        )
                    })}
                </div>
        </div>
    )
}
export default Cozumler

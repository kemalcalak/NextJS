// reserve file name middleware.js jsx tsx
import {NextRequest,NextResponse} from 'next/server'
export function  middleware(request){
    const cookie='1'
    // eğer kullanıcının cookie geçerli ise sayfayı aç değilse açma

    const header=new Headers(request.headers)
    header.set('x-hello-nextjs-kurs',123)
    console.log('header',header.get('x-hello-nextjs-kurs'))
    console.log('req',request.headers.get('x-hello-nextjs-kurs'))


    const r=  NextResponse.next(
        {
            request:{
                headers:header
            }
        }
    )
    r.headers.set("x-y-z",321)
    r.headers.set('x-hello-nextjs-kurs',123)
    return  r

    if(request.nextUrl.pathname.startsWith('/parallel')){
        return NextResponse.rewrite(new URL('/',request.url))
    }

    if(request.nextUrl.pathname.startsWith('/custom')){
        return NextResponse.redirect(new URL('/',request.url))

    }
   // console.log('middleware',request.url)
    /*console.log('ip',request.ip)
    console.log('geo',request.geo)
    console.log('cookie',request.cookie)
    console.log('nexturl',request.nextUrl)*/
   // return NextResponse.next()
   // return NextResponse.json({id:1})
   // return  NextResponse.redirect(new URL('/deneme',request.url))


}
//reserved
/*
export const  config={
    matcher:['/parallel','/deactiveusers','/custom/:path*']
}
*/

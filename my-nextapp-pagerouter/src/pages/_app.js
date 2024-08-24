import "@/styles/globals.css";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {handleRoute} from "next/dist/experimental/testmode/playwright/page-route";

export default function App({ Component, pageProps }) {
 // console.log('component',Component)
  const CustomLayout=Component.getLayout?Component.getLayout:<></>
  //console.log('customlayout',CustomLayout)

    const renderPage=(c)=>{
            if(Component.getLayout){
                return Component.getLayout(c)
            }
            return  <>{c}</>
    }
    const router=useRouter()
    useEffect(()=>{
        console.log(router.asPath)
        console.log(router.basePath)
        const handleRouteChange=(url)=>{
                console.log('changestart'
            ,url)
        }
        const handleRouteChangeComplete=(url)=>{
            console.log('comp',url)
        }
        router.events.on('routeChangeError',(err,url)=>{
            console.log('err',err,'url',url)
        })
        router.events.on('beforeHistoryChange',(url)=>{
            console.log('beforehistroychange',url)
        })
        router.events.on('routeChangeComplete',handleRouteChangeComplete)
        router.events.on('routeChangeStart',handleRouteChange)
        return ()=>{
            router.events.off('routeChangeStart',handleRouteChange)
            router.events.off('routeChangeComplete',handleRouteChangeComplete)
        }

    },[router])
  return (
           <>
               {renderPage(  <Component {...pageProps} />)}

           </>
  )
}

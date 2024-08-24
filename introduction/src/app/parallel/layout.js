import {Suspense} from "react";

export default function ParallelLayout({children,team,club,members}){
    return(
        <>
        <div className="parallel-wrapper">
            <div> Ana içerik</div>

            <div>
               {children}
            </div>
            <div>
                {team}
            </div>
            <div>
                {members}
            </div>
            <Suspense fallback={<div>....</div>}>
                <div>
                    {club}
                </div>
            </Suspense>

        </div>
        </>
    )
}

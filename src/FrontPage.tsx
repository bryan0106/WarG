import React, { useState } from "react";
interface FrontLoadPageProps {
    children: React.ReactNode;
    loadingText?: string;
}


const FrontLoadPage: React.FC<FrontLoadPageProps> = ({ children }) => {
     const [loading, setLoading] = useState(true);

return(
    <>
            {loading ? (
        <><div className="maincontainer">
            </div><main>
               
               <section className="Frontsection">
                   
                    <h1 className="title">We're officially Mr. & Mrs</h1>
                    <p className="desc1">As much as we’d love to personally hug, chat, and take photos with each and every one of you, the newlywed chaos is real! </p>
                    <p className="desc1">So if we didn’t get a snap together <br />
                        (or even if we did!) we’d absolutely love to see your fun moments from our big day!</p>
                    <img className="cam" src="/cam.png" alt="" />

                    <p className="desc2">Got a photo from the wedding? Any picture will do even the bloopers, selfies, or your plate of food!</p>
                    <button onClick={()=>setLoading(false)} className="upbtn">UPLOAD HERE</button>
               
               
               </section>
               
               
                </main></>

   ) : (
                children
            )}
        </>

);
};
export default React.memo(FrontLoadPage);
import { useState } from "react";




 function Mainmenu (){

  const [activeSection, setActiveSection] = useState<'upload' | 'photos'>('upload');
      const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveSection(event.target.value as 'upload' | 'photos');
 
      }
return(

    <><div className="uploadcontainer">
    </div>
    
    <main>
            <div className='upform'>
                <div className="segmented-control">
                        <input
                            type="radio"
                            id="uploadRadio"
                            name="contentSwitch"
                            value="upload"
                            checked={activeSection === 'upload'}
                            onChange={handleRadioChange} />
                        <label htmlFor="uploadRadio">Upload Photo</label>

                        <input
                            type="radio"
                            id="photosRadio"
                            name="contentSwitch"
                            value="photos"
                            checked={activeSection === 'photos'}
                            onChange={handleRadioChange} />
                        <label htmlFor="photosRadio">Photos</label>

                        <div className="active-bg"></div>
                    </div>


{activeSection==="upload"?(
                
                <section className="uploadsection ">
                    <button className='choosefile'><span className='arrowup'></span></button>

                    <div className='updes2'>
                        <p>  <b>Tap to Upload Your Photos & Videos</b></p>

                        <p className='updes1'>Help us relive the best day ever!<br /> If you captured any photos or videos during our <br />wedding, we’d love to see them.</p>
                    </div>

                    <p className="updes3">
                        Any shot  fun, candid, or sweet<br /> moments will do!
                    </p>           

                </section>

):(
    <section className="gallerysection ">

                        <div className="photoc">
                            <div className="photogal">
                                <img className='ass' src="/cam.png" alt="" />
                            </div>

                            <div className="photogal">
                                <img src="/background.jpg" alt="" />
                            </div>
                            <div className="photogal">
                                <img src="/background.jpg" alt="" />
                            </div>
                            <div className="photogal">
                                <img src="/background.jpg" alt="" />
                            </div>
                        </div>

                    </section>

)}

            </div>


        </main></> 


);
 }
 export default Mainmenu;
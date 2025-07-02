
import axios from "axios";
import { useEffect, useState} from "react";

interface ImageList
{
    id:number;
    OrigName: string;
    FilePath: string;
    FileMime: string;

}


 function Mainmenu (){

    
 


  const [activeSection, setActiveSection] = useState<'upload' | 'photos'>('upload');




      const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setActiveSection(event.target.value as 'upload' | 'photos');
           }







 const [imglist ,setimgl] = useState<ImageList[]>([]);
const fecthimage = async()=>
    {  
        try{const res  =  await fetch('http://127.0.0.1:8000/api/screendata');
const data = await res.json();
setimgl(data);} catch{
    alert('asd');
}
    }
    useEffect(()=>{fecthimage();},[]);







//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
// const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
         const file = event.target.files[0];
 
        handleUpload(file.name ,file);
     
    } 
  };


  const handleUpload = async (fnma: string ,filo: File) => {
  

    const formData = new FormData();
    formData.append('image', filo); 

    try {
      const response = await axios.post('http://localhost:8000/api/upload-private-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',

        },

        
    //     onUploadProgress: (progressEvent) => {
    //   const total = progressEvent.total ?? 0; // Use 0 if total is undefined
    //       const loaded = progressEvent.loaded;
    //       const percentCompleted = total > 0 ? Math.round((loaded * 100) / total) : 0;
    //       setUploadProgress(percentCompleted);
    //       console.log(`Upload Progress: ${percentCompleted}%`);     }


      });
    //  alert(response.data.message || 'Image uploaded successfully!');
       insertimage(fnma);
     
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image.');
    }
  };




const insertimage = async (flp:string, )=>{
    try{


        await axios.post('http://127.0.0.1:8000/api/addphoto',
        {OrigName: "123" ,FilePath: flp ,FileMime: "itemmess"},
        {
          headers: {
            'Content-Type': 'application/json', 
         },
        });
        alert('Image uploaded successfully!')
        fecthimage();
    }
    catch{

alert('not ok');
    }
    

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
                   
                      {/* File input element */}
        <input
          type="file"
          id="fileInput"
          className="hideme" 
          onChange={handleFileChange}
        />

  {/* {isLoading ? `Uploading... (${uploadProgress}%)` : 'Upload Image'}
      {isLoading && uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
      {isLoading && uploadProgress === 0 && <p>Starting upload...</p>}
  */}

        {/* Custom button to trigger the file input */}
        <label
          htmlFor="fileInput"
         className='choosefile'
        >
         <span className='arrowup'></span>
        </label>
                  

                    <div className='updes2'>
                        <p> <b>Tap to Upload Your Photos & Videos</b></p>

                        <p className='updes1'>Help us relive the best day ever!<br /> If you captured any photos or videos during our <br />wedding, we’d love to see them.</p>
                    </div>

                    <p className="updes3">
                        Any shot  fun, candid, or sweet<br /> moments will do!
                    </p>           

                </section>

):(
    <section className="gallerysection ">

                        <div className="photoc">
                            {imglist.map(imgs => 
                            <div className="photogal">
                                <img className='ass' src={`http://127.0.0.1:8000/images/${imgs.FilePath}`} alt="" />
                            </div>
                                )}
                    
                        </div>

                    </section>

)}

            </div>


        </main></> 


);
 }
 export default Mainmenu;
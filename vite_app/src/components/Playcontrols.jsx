import React,  { useEffect,useState } from 'react';
import './Playcontrols.css'



function Playcontrols(){
    
    // const grid=[
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: '1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true", title:'Infinix Note 12:             AMOLED    HelloG88 Soc!' , subtitle1: 'ATC Android ToTo C..',subtitle2: ' 4.2M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true", title:'My first UX Design case study - This got me my first job.' , subtitle1: 'Saptrashi prakash',subtitle2: ' 4.8k views . 1 year ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'My mix' , subtitle1: 'Lopamudra Mitra  ',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true", title:'UX Design-What is it?(From AJ&Smart)' , subtitle1: 'AJ&Smar',subtitle2: ' 150kM views . 3 years ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Mix-Mombati|Mohon Sharif | Dhakaiya Dose|Mahib Ahsan' , subtitle1: 'Mohon Sharif, Odd Signature,Shayan',subtitle2: ' ' , subtitleimg:""},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true", title:'48 Visa Free' , subtitle1: 'Nadir On the Go',subtitle2: ' 1.7M views . 1 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true", title:'14 Advanced Tip To Design FASTER in Figma' , subtitle1: 'Mizko',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    //     {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    // ]


    const [images,setimages]=useState([]);
    useEffect(() => {
        
        fetch('http://localhost:3000/grid')
        .then((response) =>response.json())
        .then((data) => setimages(data))

        .catch ((error) => console.log(error))
    });





    return(
        <>
        
        
        <div className="rightside">
                <div className="rightfirst">
                    <div className="search"><div className="searchtxt">Search</div><div className="searchimg"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" /></div></div>
                    <div className="mic"><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" /></div>
                    <div className="rightbar">
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" className="create" />
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" className="create" />
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" className="create" />
                        {/* <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" className="create" /> */}
                        <div className="photo" >
                        </div>
                        
                        </div>
                </div>

                <hr className="hr4"/>
                <div className="li">

                   <p className="libar1">All</p> 
                   <p className="libar2">Cook Studio</p> 
                   <p className="libar3">UX</p> 
                   <p className="libar2">Case Study</p> 
                   <p className="libar4">music</p> 
                   <p className="libar2">Bnagla Lofi</p> 
                   <p className="libar4">Tour</p> 
                   <p className="libar2">Saintmartin</p> 
                   <p className="libar4">Tech</p> 
                   <p className="libar5">iphone 13</p>
                   <p className="libar6">User interface Design</p>  

                    
                </div>
   
                <hr className="hr5"/>

                
                <div className="main">
              
                {images.map((i) => (
                            <div className="card" key={i}>
                                <img src={i.img} alt="" className='firstcard' />
                                <div className="cardflex"><img src={i.smallimg} alt="" /> <div className='cardtitle'>{i.title}</div></div>
                                <div className="cardtxt">{i.subtitle1} <img src={i.subtitleimg} alt="" />{i.subtitle2}</div>
                            </div>
                    ))}

                    </div>
              </div>

             
                

                     
                  
                
            
        
        
        
        
        
        </>
    )
}

export default Playcontrols
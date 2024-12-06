import './Playcontrols'

function Playcontrols(){
    
    const grid=[
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: '1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true", title:'Infinix Note 12:             AMOLED    HelloG88 Soc!' , subtitle1: 'ATC Android ToTo C..',subtitle2: ' 4.2M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true", title:'My first UX Design case study - This got me my first job.' , subtitle1: 'Saptrashi prakash',subtitle2: ' 4.8k views . 1 year ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'My mix' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
        {img:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true", smallimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true", title:'Bulbuli|Coke Studio Bangla| Seasion One|Ritu RajXNandita' , subtitle1: 'Coke Studio Bangla',subtitle2: ' 1.5M views . 2 days ago' , subtitleimg:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"},
    ]

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
                        <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" className="create" />
                        </div>
                </div>

                <hr className="hr4"/>

                <hr className="hr5"/>
 <div className="main">
              
                {grid.map((i) => (
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
import './Sidebar.css'

function Sidebar(){

    const data=[
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true",title:"Nadir On The Go"},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true",title:"Coke Studio Bangla"},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true",title:"MKBHD"},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true",title:"Figma"},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true",title:"ATC Android TOTo c..."},
        {img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true",title:"Alux.com"},
    
    ]

    return(
   <>

<div className="container1">

         
<div className="logo">

<img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"/>

<img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" />
  
</div>

<div className="list">

    <div className="img1">
        <img className="img01" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true"/>
        <p className="text1">Home</p>
    </div>

    <div className="img2">
        <img className="img02" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true"/>
        <p className="text2">Explores</p>
    </div>

    <div className="img3">
        <img className="img03" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true"/>
        <p className="text3">Shorts</p>
    </div>

    <div class="img4">
        <img className="img04" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true"/>
        <p className="text4">subscription</p>
    </div>
</div>


<hr className="hr"/>

<div className="list1">

    <div className="img5">
        <img className="img05" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true"/>
        <p className="text5">Library</p>
    </div>

    <div className="img6">
        <img className="img06" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true"/>
        <p className="text6">History</p>
    </div>

    <div className="img7">
        <img className="img07" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true"/>
        <p className="text7">Your videos</p>
    </div>

    <div className="img8">
        <img className="img08" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true"/>
        <p className="text8">Watch later</p>
    </div>

    <div className="img9">
        <img className="img09" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true"/>
        <p class="text9">Liked videos</p>
    </div>

    <div className="img10">
        <img className="img010" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true"/>
        <p className="text10">Show more</p>
    </div>
</div>

<hr className="hr1"/>

<p className="sub">SUBSCRIPTION</p>

<div className="list2">

    {/* <div className="img11">
        <img className="img011" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true"/>
        <p className="text11">Nadir On The Go</p>
        <div className="circle1"></div>
    </div>

    <div className="img12">
        <img className="img012" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true"/>
        <p className="text12">Coke Studio Bangla</p>
        <div className="circle1"></div>
    </div>

    <div className="img13">
        <img className="img013" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true"/>
        <p className="text13">MKBHD</p>
    </div>

    <div className="img14">
        <img className="img014" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true"/>
        <p className="text14">Figma</p>
        <div className="circle1"></div>
    </div>

    <div className="img15">
        <img className="img015" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true"/>
        <p className="text15">ATC Android TOTo c...</p>
    </div>

    <div className="img16">
        <img className="img016" src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true"/>
        <p className="text16">Alux.com</p>
        <div className="circle1"></div>
    </div> */}


    <div>
        {data.map((i)=>(
           <div key={i.id} className="img16" >
            
           <img className="img011" src={i.img_url} alt="" />
           <p className="text16">{i.title}</p>
       </div>
        ))}
    </div>
</div>



</div>
   
   
   
   
   
   </>

    )
}

export default Sidebar
import React ,{useEffect, useState}from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router';
export function Discover(){
  
  const discoverData =[
    {
    title:"Illustration",
    dis:"Editorial, commercial, artistic and other types of illustration",
    link4:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b66fbc128208907.Y3JvcCwxMzc4LDEwNzgsNTM1LDQyMw.jpg",
    link1:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2b6c31128016703.Y3JvcCwxNDM4LDExMjUsNTYsMA.jpg",
    link3:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8798ad127983931.Y3JvcCwyNDAzLDE4ODAsNDcsMA.jpg",
    link5:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b6ca6a119291597.Y3JvcCwxNDkyLDExNjcsMCww.jpg",
    link2:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f0df6b128136979.Y3JvcCwyMzM2LDE4MjcsODM4LDEzMDY.jpg",
    link7:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5fa3bb126332243.Y3JvcCwyMDU4LDE2MDksNTc1LDI1NA.png",
    link8:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/befbcc147346029.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
    link6:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f0df6b128136979.Y3JvcCwyMzM2LDE4MjcsODM4LDEzMDY.jpg",

  },
  {
    title:"Cosmic",
    dis:"Sequential art in the form of comic strips, editorial cartoons, graphic novels, and more",
    link4:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b66fbc128208907.Y3JvcCwxMzc4LDEwNzgsNTM1LDQyMw.jpg",
    link3:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8798ad127983931.Y3JvcCwyNDAzLDE4ODAsNDcsMA.jpg",
    link2:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f0df6b128136979.Y3JvcCwyMzM2LDE4MjcsODM4LDEzMDY.jpg",
    link7:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5fa3bb126332243.Y3JvcCwyMDU4LDE2MDksNTc1LDI1NA.png",
    link5:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b6ca6a119291597.Y3JvcCwxNDkyLDExNjcsMCww.jpg",
    link6:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f0df6b128136979.Y3JvcCwyMzM2LDE4MjcsODM4LDEzMDY.jpg",
    link8:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/befbcc147346029.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
    link1:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2b6c31128016703.Y3JvcCwxNDM4LDExMjUsNTYsMA.jpg",
  },
  {
    title:"T-Shirt",
    dis:"Design and graphic application of imagery on tees and other clothing items",
    link3:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8798ad127983931.Y3JvcCwyNDAzLDE4ODAsNDcsMA.jpg",
    link5:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b6ca6a119291597.Y3JvcCwxNDkyLDExNjcsMCww.jpg",
    link4:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b66fbc128208907.Y3JvcCwxMzc4LDEwNzgsNTM1LDQyMw.jpg",
    link7:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5fa3bb126332243.Y3JvcCwyMDU4LDE2MDksNTc1LDI1NA.png",
    link1:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2b6c31128016703.Y3JvcCwxNDM4LDExMjUsNTYsMA.jpg",
    link2:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f0df6b128136979.Y3JvcCwyMzM2LDE4MjcsODM4LDEzMDY.jpg",
    link6:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f0df6b128136979.Y3JvcCwyMzM2LDE4MjcsODM4LDEzMDY.jpg",
    link8:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/befbcc147346029.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg"
  },
  {
    title:"Digital Art",
    dis:"eative work made with digital tools, including digital painting, matte painting, CGI, and more",
    link1:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2b6c31128016703.Y3JvcCwxNDM4LDExMjUsNTYsMA.jpg",
    link2:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f0df6b128136979.Y3JvcCwyMzM2LDE4MjcsODM4LDEzMDY.jpg",
    link3:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8798ad127983931.Y3JvcCwyNDAzLDE4ODAsNDcsMA.jpg",
    link4:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b66fbc128208907.Y3JvcCwxMzc4LDEwNzgsNTM1LDQyMw.jpg",
    link5:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b6ca6a119291597.Y3JvcCwxNDkyLDExNjcsMCww.jpg",
    link6:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f0df6b128136979.Y3JvcCwyMzM2LDE4MjcsODM4LDEzMDY.jpg",
    link7:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5fa3bb126332243.Y3JvcCwyMDU4LDE2MDksNTc1LDI1NA.png",
    link8:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/befbcc147346029.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg"
  },
  {
    title:"Surface",
    dis:"Murals, pattern design on objects, hand-painted objects, and more",
    link3:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8798ad127983931.Y3JvcCwyNDAzLDE4ODAsNDcsMA.jpg",
    link5:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b6ca6a119291597.Y3JvcCwxNDkyLDExNjcsMCww.jpg",
    link7:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5fa3bb126332243.Y3JvcCwyMDU4LDE2MDksNTc1LDI1NA.png",
    link8:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/befbcc147346029.Y3JvcCwzODY2LDMwMjQsODYsMA.jpg",
    link4:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b66fbc128208907.Y3JvcCwxMzc4LDEwNzgsNTM1LDQyMw.jpg",
    link1:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2b6c31128016703.Y3JvcCwxNDM4LDExMjUsNTYsMA.jpg",
    link6:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f0df6b128136979.Y3JvcCwyMzM2LDE4MjcsODM4LDEzMDY.jpg",
    link2:"https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/f0df6b128136979.Y3JvcCwyMzM2LDE4MjcsODM4LDEzMDY.jpg"
  },

  
]

const [discove,setdiscover] = useState()
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const get=(d)=>{
    var pizz = discoverData.filter(data => data.title.toString().toLowerCase().includes(d.toString().toLowerCase()));
    setdiscover(pizz);
  }
    return(
        <div className="discover">
            <div className="course">
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-container">
      <Carousel.Item  className="carousel-container">
        <img
          className="d-block w-100"
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b55a77112974449.Y3JvcCwxMzkwLDEwODgsMyww.jpg"
          alt="First slide"
        />
        
        <Carousel.Caption  className="carousel-container">
          <h3>PhotoGraphy</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-container">
        <img
          className="d-block w-100"
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/219b9a113092081.Y3JvcCw4OTQsNzAwLDQyMyww.png"
          alt="Second slide"
        />

        <Carousel.Caption className="carousel-container">
          <h3>3D Art</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item className="carousel-container">
        <img
          className="d-block w-100"
          src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b55a77112974449.Y3JvcCwxMzkwLDEwODgsMyww.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="carousel-container">
          <h3>Illustration</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="dis-heading ">
        <div className="dis-title border"  onClick={()=>get("Illustration")}>Illustration</div>
        <div className="dis-title border"  onClick={()=>get("cosmic")}>cosmic</div>
        <div className="dis-title border" onClick={()=>get("T-shirt")}>T-shirt</div>
        <div className="dis-title border" onClick={()=>get("Surface")}>Surface design</div>
        <div className="dis-title border" onClick={()=>get("Digital Art")}>Digital Art</div>
    </div>
       <div className="discover-title text-center">
        {discove?discove.map(data=>
        <div>
         <p className="title">{data.title}</p>
         <div className="discription">{data.dis}</div>
         <div className="A-tag"><i class="fa fa-search fa-1.5x " aria-hidden="true"></i><span>
          <a onClick={()=>navigate("/")}>{`search all  ${data.title} project`}</a>
          </span></div>
         <div className="follow">{`Follow ${data.title}`}</div>
         </div>
          ):<div>
          <p className="title">Illustration</p>
          <div className="discription">Editorial, commercial, artistic and other types of illustration</div>
          <div onClick={()=>navigate("/")}><i class="fa fa-search " aria-hidden="true"></i><span
           style={{ color:"#919191",marginLeft:"4px"}}>
         {`search all Illustration project`}
           </span></div>
          <div className="follow ">{`Follow Illustration`}</div>
          </div>}
      </div>
       <div  >
          
              {discove?discove.map(d=>
              <div className="dis-img">
                <div>
                 <img className="image" src={d.link1}></img>
                 <img className="image" src={d.link2}></img>
                 <img className="image" src={d.link3}></img>
                 <img className="image" src={d.link4}></img>
                 <img className="image" src={d.link5}></img>
                 <img className="image" src={d.link6}></img>
                 <img className="image" src={d.link7}></img>
                 <img className="image" src={d.link8}></img>
                 </div></div>
              ):<div className="text-center " style={{margin:"60px"}}><h3>Click on One Event</h3></div>}
             </div>
        </div>
    )
}
import React ,{useEffect, useState}from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { withTheme } from '@mui/material';
import { style } from '@mui/system';
import Card from 'react-bootstrap/Card';

const obj =[
  
  {
img:"https://mir-s3-cdn-cf.behance.net/projects/404/67d60c147964219.Y3JvcCwxMDk4LDg1OSwyLDA.png",
title:"Levi",
like:320,
eye:320,
type:"project"
 
},
{
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/3c5eb2152162879.Y3JvcCw1OTQ0LDQ2NTAsNTE1LDA.jpg",
  title:"20 Blocks.",
  like:320,
  eye:320,
  type:"People"
},
{
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/eb537b139372311.Y3JvcCwyMDQ2LDE2MDEsMjU4LDA.jpg",
  title:"Konnichiwa Zhongshan",
  like:320,
  eye:320,
  type:"Moodboards"
},
{
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/28a246121176283.Y3JvcCwxMTkxLDkzMSwxMDYsMA.jpg",
  title:"Felippe Percigo",
  like:320,
  eye:320,
  type:"project"
},
{
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/28a246121176283.Y3JvcCwxMTkxLDkzMSwxMDYsMA.jpg",
  title:"Felippe Percigo",
  like:320,
  eye:320,
  type:"project"
},
{
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/28a246121176283.Y3JvcCwxMTkxLDkzMSwxMDYsMA.jpg",
  title:"Felippe Percigo",
  like:320,
  eye:320,
  type:"project"
},
{
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/28a246121176283.Y3JvcCwxMTkxLDkzMSwxMDYsMA.jpg",
  title:"Felippe Percigo",
  like:320,
  eye:320,
  type:"project"
},
{
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/28a246121176283.Y3JvcCwxMTkxLDkzMSwxMDYsMA.jpg",
  title:"Felippe Percigo",
  like:320,
  eye:320,
  type:"project"
},
{
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/47add4111051213.Y3JvcCw4MDgsNjMyLDUwLDA.jpg",
  title:"kThe Telegraph Magazine Vol. 2",
  like:320,
  eye:320,
  type:"Images"
},
{
  img:"https://mir-s3-cdn-cf.behance.net/projects/404/47add4111051213.Y3JvcCw4MDgsNjMyLDUwLDA.jpg",
  title:"kThe Telegraph Magazine Vol. 2",
  like:320,
  eye:320,
  type:"Images"
}]
export function Home() {
  const [State, setuseState]= useState(obj)
  const [Sort, setsort]= useState(State)
  const [search,setsearch]= useState("")
  const [input,setinput]= useState()
  var presidentInput = document.getElementsByClassName('inputField').value;
   fetch("https://capstonebackend--q.herokuapp.com/").then(data=>data.json()).then(data=>{
       setuseState(data)
      
   })
   
  const changeTheme = (e,d) => {
    const style = {
      color: withTheme,
    }; 
    var pizz = State.filter(data => data.type.toString().toLowerCase().includes(d.toString().toLowerCase()));
    setsort(pizz);
      
    var element = document.getElementById("1");
    var element1 = document.getElementById("2");
    var element2 = document.getElementById("3");
    var element3 = document.getElementById("4");
    var element4 = document.getElementById("5");
    var element5 = document.getElementById("6");
    element.classList.remove("TitleName");
    element1.classList.remove("TitleName");
    element2.classList.remove("TitleName");
    element3.classList.remove("TitleName");
    element4.classList.remove("TitleName");
    element5.classList.remove("TitleName");
    element5.classList.remove("TitleName");
      const id =document.getElementById(e)
       id.classList.add("TitleName")
      
    
  };
  return (
    <>
      <div className="searchBar border">
        <div className="inputsandicons">
          <i class="fa fa-search fa-2x search" aria-hidden="true"></i>
          <input class="input-field"   className="inputField" type="text" 
          placeholder='Search a creative world at Work'
          onChange={(e)=>setsearch(e.target.value)} />
       { search ? <div className="findValue">{
              State.filter(data=>{
                  if(search=="")return 0
                      else if( data.type.toString().toLowerCase().includes(search.toString().toLowerCase()))
                       return data
            }
          ).map(e=><div  onClick={() =>{
                  setsearch("")
                  changeTheme("",e.type)
                  
          }}>{e.type}</div>)} </div>
         :""}
        </div>
        <div className="Titled">
          <div id="1" name="q1" className="s" onClick={() => changeTheme("1","project")}>Projects</div>
          <div id="2" name="w1" className="s" onClick={() => changeTheme("2" ,"images")}>Images</div>
          <div id="3" name="e1" className="s" onClick={() => changeTheme("3","protypes")}>Protypes</div>
          <div id="4" name="r1" className="s" onClick={() => changeTheme("4","streams")}>Streams</div>
          <div id="5" name="qg" className="s" onClick={() => changeTheme("5","people")}>People</div>
          <div id="6" name="q0" className="s" onClick={() => changeTheme("6","moodboards")}>Moodboards</div>

        </div>
      </div>

      <div className="dropDownBar border">
        <div>
          <Dropdown>
            <Dropdown.Toggle variant={style} id="dropdown-basic">
              <div id="dropfields"><span><i class="fa fa-creative-commons" aria-hidden="true"></i></span>creative fields</div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant={style} id="dropdown-basic">
              <div id="dropfields"><span><i class="fa fa-creative-commons"
                aria-hidden="true"></i></span> Tools</div>

            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant={style} id="dropdown-basic">
              <div id="dropfields"><span><i class="fa fa-creative-commons"
                aria-hidden="true"></i></span> Colors</div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant={style} id="dropdown-basic">
              <div id="dropfields"><span><i class="fa fa-creative-commons"
                aria-hidden="true"></i></span> Location</div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle variant={style} id="dropdown-basic">
              <div id="dropfields"><span><i class="fa fa-creative-commons"
                aria-hidden="true"></i></span> School</div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="sfl">
          <Dropdown>
            <Dropdown.Toggle variant={style} id="dropdown-basic">
              <div id="dropfields"><span><i class="fa fa-creative-commons"
                aria-hidden="true"></i></span> Recommended</div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
       <Cards sort={Sort}/>
    </>
  );
}
function Cards({sort}){
  return(
   
        <div className="container">
          <div className="row">
            {sort? sort.map(data=>
          <div className="col-lg-3 cards">
      <Card style={{ width: '16rem',height:"400px" }}>
      <Card.Img variant="top" src={data.img} style={{ width: '16rem',height:"200px" }}/>
      <Card.Body style={{ width: '16rem',height:"400px" }}>
        <Card.Title>{data.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
          </div> ): "loading" 
          }
          </div>
        </div>
   
  )
}
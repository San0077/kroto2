import './App.css';
import React,{useEffect, useRef, useState} from 'react';
import {Routes, Route,useNavigate ,Navigate} from 'react-router-dom';
import { ChakraProvider, Drawer,Input , DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure, Select, DrawerFooter } from '@chakra-ui/react';

import { Button } from 'react-bootstrap';

var valueName=[]
 function App() {
  const [size, setSize] = useState('')
  const [dropdown, setdropdown] = useState([]);
  const [segmentName, setsegmentName] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure()
  const previousValue = useRef("")
  const [inputValue, setInputValue] = useState("");

  const handleClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }
 
  function textValue(e){
          let obj ={
          [e.target.value]:e.target.value
          }
          valueName.push(obj)
  }
  
  
  function edit(e){
     let fil = dropdown.filter(element=>element!=e)
     valueName.forEach(object => {
      delete object[e];
    });
     setdropdown(fil)
     const select =document.getElementById("trends")
     select.innerHTML += `<option>${e}</option>`;
  }
   let box = dropdown.map(e=>{
    
    return(
      <div>
     <Select placeholder={e} id={e}    size='md' >
                    <option value='firstName'>FirstName</option>
                    <option value='lastName'>LastName</option>
                    <option value='age'>Age</option>
                    <option value='account Name'>Account Name</option>
                    <option value='gender'>Gender</option>
                    <option value='city'>City</option>
                    <option value='state'>State</option>
    </Select>
    <button className="button2" onClick={() =>edit(e)}><i class="fa fa-minus" aria-hidden="true"></i></button>
    </div>
    )
   })
   const savetheSegment=()=>{
    if(segmentName!=""){
        let obj={
          "segment_name":segmentName,
          "schema":valueName
        }
        
        fetch("https://webhook.site/6397e935-26e7-4911-8a41-990eb0ad52fd",{
        method:"POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        }
      }).then(data=>data.json()).then(data=>console.log(data))
    }
        
   }
  const save =()=>{
           const select =document.getElementById("trends")
           for(let i=0 ; i<select.length;i++){
                let trend = select[i]
                if(trend.selected){
                    setdropdown([...dropdown,trend.value])
                    select.remove(i)
                }
           }
  }
  const sizes = 'md'
  return (
    <div>
  <div className ="app">
    <div>
    <i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>
    </div>
       <div className="view">
           View Audience
       </div>
      
   </div>
   
   <button className="button" onClick={() => handleClick(size)}
        key={size}> save segment</button>
   <div className="slide">
   <ChakraProvider>
        <Drawer onClose={onClose} isOpen={isOpen} size={sizes}>
        <DrawerOverlay />
        <DrawerContent>
       
      <div>
          <div className='app'>
        <div>
           <i class="fa fa-angle-left " aria-hidden="true"></i>
        </div>
        <div className="view">
           saving segment
        </div>
          </div>
             <div className="details">
                  <label>Enter the Name of the Segment</label>
                  <Input placeholder='Name of the segment' onChange={(e)=>setsegmentName(e.target.value)} size='md' />
                  <p>
                    To save the Segment you need to add the schemas to bulid the query
                  </p>
                  <div>
                       <section><span className="circle"><i class="fa fa-circle" style={{color:"red",paddingRight:"10px"}} aria-hidden="true"></i></span>user traits</section>
                       <section><span><i class="fa fa-circle" style={{color:"green",paddingRight:"10px"}} aria-hidden="true"></i></span>Group traits</section>
                  </div>
                   <div className="seletion">
                        {box?box:""}
                  
                  <Select placeholder='Add schema to segment' onChange={(e)=>textValue(e)} id ="trends" size='md' >
                    <option value='firstName'>FirstName</option>
                    <option value='lastName'>LastName</option>
                    <option value='age'>Age</option>
                    <option value='account Name'>Account Name</option>
                    <option value='gender'>Gender</option>
                    <option value='city'>City</option>
                    <option value='state'>State</option>
                  </Select>
                  <p onClick={() =>save()}>+ Add new Schema</p>
                  </div>
                  <section className="final">

                  <button  onClick={() =>savetheSegment()}>save the segment</button>
                  <button className="button2" onClick={onClose}>cancel</button>

                  </section>

              </div> 
             
          
      
        </div>
     
        </DrawerContent>
      </Drawer>
        </ChakraProvider>
    </div>
   </div>
  )
}


export default App;

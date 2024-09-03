"use client"
import { useEffect } from "react";


export default function Home() {
  
useEffect(()=>{
    const script=document.createElement("script")
    script.src="Build\new webgl.loader.js"
    script.async=true;
    document.body.appendChild(script);


    return () =>{
      document.body.removeChild(script);
    }  
  },[])
  
  return (
    
    <div>
      <p>For Large Key = L</p><br />
      <p>For Small Key = R</p><br />
      <p>For Jump Key = Space</p><br />
      <p>For movement Key = arrows</p><br />
     

      <iframe src="index.html" width="100%" height="100%"
      style={{border: "none" , position:"absolute" , top: 0 , left: 0,right:0,bottom: 0}}
      allowFullScreen
      ></iframe>
    </div>
  );
  
}

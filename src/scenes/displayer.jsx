import React from "react";
import axios from "axios";
let Exporter = [];
const fetchData = (username) => {
  axios
    .get(`https://codeforces.com/api/user.info?handles=${username}`)
    .then((response) => {
      // Exporter=response.data.result.map((x)=>x);
      let mj = 0;
      Exporter.forEach(element => {
        console.log(element.handle)
        if(element.handle==username){
          mj=1;
        }
      });
      if(mj==0){

        Exporter = [...Exporter,response.data.result[0]];
      }
      else{
        console.log("error")
      }
      // console.log(response.data.result)
    })
    .catch((error) => {
      console.log(error);
    });
};
function Displayer() {
  try{
    fetch(`http://localhost:8080/get/cfUserName`, {
      mode: "cors"
    })
    .then((res)=>{  
      return res.json();
    })
    .then((cfnms)=>{
      
      for(let i=0;i<cfnms.length;i++){
        fetchData(cfnms[i]);
      }
    })
    
  }
  catch(err){
    console.log(err);
  }
}
export default Displayer;
export { Exporter };

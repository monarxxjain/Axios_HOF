import React from "react";
import axios from "axios";
var gitExporter = [];
const gitfetchData = (username) => {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      let mj = 0;
      gitExporter.forEach(element => {
        if (element.login == username) {
          mj = 1;
        }
      });
      if (mj == 0) {
        gitExporter = [...gitExporter, response.data];
      }
      else {
        console.log("Extra Render")
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

function gitDisplayer() {
  try {
    fetch(`http://localhost:8080/get/gitUserName`, {
      mode: "cors"
    })
      .then((res) => {
        return res.json();
      })
      .then((gitnms) => {
        for (let i = 0; i < gitnms.length; i++) {
          if(gitnms[i]!=""){
            gitfetchData(gitnms[i]);
          }
        }
      })

  }
  catch (err) {
    console.log(err);
  }
}

export default gitDisplayer;
export { gitExporter };

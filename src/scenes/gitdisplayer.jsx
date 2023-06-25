import React from "react";
import axios from "axios";
var gitExporter = [];
var gitScore=0;
const gitfetchData = (username, githubScore) => {
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
        response.data.score = githubScore;
        gitExporter = [...gitExporter, response.data];
      }
      // else {
      //   console.log("Extra Render")
      // }
    })
    .catch((error) => {
      console.log(error);
    });
};

function gitDisplayer() {
  try {
    fetch(`http://localhost:8080/get/gitUserData`, {
      mode: "cors"
    })
      .then((res) => {
        return res.json();
      })
      .then((gitnms) => {
        for (let i = 0; i < gitnms.length; i++) {
          if(gitnms[i]!=""){
            gitfetchData(gitnms[i].githubownername, gitnms[i].score);
          }
        }
      })

  }
  catch (err) {
    console.log(err);
  }
}

export default gitDisplayer;
export { gitExporter,gitScore };

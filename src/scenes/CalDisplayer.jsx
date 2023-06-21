import React from "react";
let initEvents = [];
const CalDisplayer = ()=>{
    const fetchData = async () => {
        await fetch(`http://localhost:8080/get/calendar`, {
            mode: "cors"
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {

                data.forEach(jsonD => {

                    let mj = 0;

                    initEvents.forEach(element => {
                        if (element.start == jsonD.start) {
                            mj = 1;
                        }
                    });

                    if (mj == 0) {

                        initEvents = [...initEvents, jsonD];
                    }

                });
                // console.log(initEvents)
            })
    }
    fetchData()
        .then(() => {
            // console.log(initEvents)
        })
}
export default CalDisplayer;
export { initEvents };

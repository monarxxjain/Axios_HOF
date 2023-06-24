// import { feedback } from "../constants";
import styles from "../../style";
import FeedbackCard from "./FeedbackCard";
import { alumAdd } from "./CTA";
import { people02 } from '../../assets';
import { useEffect } from "react";
// console.log(addAlumni);

const Testimonials = ({ feedback }) => {

  const showImage = (data) =>{
    const body = document.getElementById('timePass');
    const child = document.createElement('img');
    child.src= data[0].alumniPic;
    body.appendChild(child);
  }
  useEffect(() => {
    try{
      fetch(`http://localhost:8080/get/alumni`, {
        mode: "cors"
      })
        .then((res) => {
          console.log(res);
          return res.json();
        })
        .then((data) => {
          console.log(data);
          showImage(data);

        })

    }
    catch(err){
      console.log("error")
    }

  }, [])

  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          Alumni List ~<br className="sm:block hidden" />
        </h2>
        {/* <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div> */}
      </div>

      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1] ">
        {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}


      </div>
      <div className="timePass" id="timePass"></div>
    </section>
  )
};
// console.log(alumAdd);
export default Testimonials;

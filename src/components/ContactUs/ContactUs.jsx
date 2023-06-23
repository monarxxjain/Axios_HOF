import React from 'react';
import "./ContactUs.css"
import { motion } from "framer-motion";

function ContactUs() {

    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/63f249c931ebfa0fe7ee1c22/1gpl70eud';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);
    })();

    const submitContactform = (e) => {
        try{

            let form = e.currentTarget;
            let formFields = new FormData(form);
            let formDataObject = Object.fromEntries(formFields.entries());
            fetch("http://localhost:8080/post/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formDataObject)
            })
            .then(() => {
                console.log("Message Sent")
            })

        }
        catch(err){
            console.log("Error : "+err);
            e.preventDefault();

        }

    }
    return (
        <motion.div
            initial={{ opacity: 0, x: "0px", y: "-1000px" }}
            animate={{ opacity: 1, x: "0", y: "0px" }}
            exit={{ opacity: 1, x: "100px", y: "-1000px" }}
            transition={{ duration: 0.5 }}
        >
            <div className="contact_us_6">
                <div className="responsive-container-block container">
                    <form className="form-box" id='contactForm' onSubmit={(e) => {
                        submitContactform(e);
                    }}>
                        <div className="container-block form-wrapper">
                            <div className="mob-text">
                                <p className="text-blk contactus-head">
                                    Get in Touch
                                </p>
                                <p className="text-blk contactus-subhead">

                                </p>
                            </div>
                            <div className="responsive-container-block" id="i2cbk">
                                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i10mt-3">
                                    <p className="text-blk input-title">
                                        FIRST NAME
                                    </p>
                                    <input required className="input" id="ijowk-3" name="firstName" placeholder="Please enter first name..." />
                                </div>
                                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ip1yp">
                                    <p className="text-blk input-title">
                                        EMAIL
                                    </p>
                                    <input required className="input" id="ipmgh-3" name="emailAdd" placeholder="Please enter email..." />
                                </div>
                                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="ih9wi">
                                    <p className="text-blk input-title">
                                        PHONE NUMBER
                                    </p>
                                    <input required className="input" id="imgis-3" name="phno" placeholder="Please enter phone number..." />
                                </div>
                                <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12" id="i634i-3">
                                    <p className="text-blk input-title">
                                        WHAT DO YOU HAVE IN MIND ?
                                    </p>
                                    <textarea required className="textinput" id="i5vyy-3" name='message' placeholder="Please enter query..."></textarea>
                                </div>
                            </div>
                            <input type='submit' name='submit' form='contactForm' className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2" value='Submit'/>
                                
                        </div>
                    </form>
                    <div className="responsive-cell-block wk-desk-7 pl-40 wk-ipadp-12 wk-tab-12 wk-mobile-12" id="i772w">
                        <div className="map-part">
                            <p className="text-blk map-contactus-head" id="w-c-s-fc_p-1-dm-id">
                                Reach Us At
                            </p>
                            <p className="text-blk map-contactus-subhead">
                                IIIT Lucknow
                            </p>
                            <div className="social-media-links mob">
                                <a className="social-icon-link" href="https://twitter.com/iiit_lucknow" id="ix94i-2-2">
                                    <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png" />
                                </a>
                                <a className="social-icon-link" href="https://www.facebook.com/iiitlucknow/" id="itixd">
                                    <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png" />
                                </a>
                                <a className="social-icon-link" href="#" id="izxvt">
                                    <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-google.png" />
                                </a>
                                <a className="social-icon-link" href="https://www.instagram.com/iiitlucknow/" id="izldf-2-2">
                                    <img className="link-img image-block" src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png" />
                                </a>
                            </div>
                            <div className=" container-block">
                            <motion.div
                                initial={{ opacity: 0, x: "0px", y: "1000px" }}
                                animate={{ opacity: 1, x: "0", y: "0px" }}
                                exit={{ opacity: 1, x: "100px", y: "-1000px" }}
                                transition={{ duration: 1.25 }}
                                className=" w-full overflow-hidden">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.2278200121605!2d81.02144971170861!3d26.800873664789428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be37eb0826741%3A0x34d9dd79cdeac7d8!2sIndian%20Institute%20of%20Information%20Technology%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1682262539630!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='iframe-123'></iframe>
                            </motion.div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );




}
export default ContactUs;
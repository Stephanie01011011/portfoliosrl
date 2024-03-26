import { useEffect } from "react";

export const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return(
        <div className="contactwrapper">
            <h1 id="contactTitle">Contact</h1>
            <hr />
            <div className="contactdisplay">
                
                <div className="conttext">
                    <div className="contsocials">
                        <div className="insta">
                        <p>Instagram</p>
                    <a href="https://www.instagram.com/stephiirenee/"><div className="instagram"></div></a>
                    
                    </div>
                    <div className="linked">
                    <p>LinkedIn</p>
                    <a href="https://www.linkedin.com/in/slivengood01/"><div className="linkedin"></div></a>
                    
                    </div>
                    <div className="git">
                    <p>GitHub</p>
                    <a href="https://github.com/Stephanie01011011"><div className="github"></div></a>
                    
                    </div>
                    </div>
                    <div className="boxes">
                        <div className="phone">
                            <h1>Phone</h1>
                            <a href="tel:463-246-8451" id="phonenumber">(463) 246-8451</a>
                            </div>
                        <div className="email">
                            <h1>Email</h1>
                            <a href="mailto:sreneelive@gmail.com" id="email">sreneelive@gmail.com</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
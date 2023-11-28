import { useEffect } from "react";

export const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return(
        <div className="aboutwrapper">
        <h1 id="aboutTitle">About Me</h1>
        <hr />
        <div className="aboutdisplay">
            <div className="area">
            <div className="image1"></div>
            <div className="text1">Thank you to each and every one of you who takes the time to view my portfolio. I have been working towards my career in web development since 2019 when I started at Ivy Tech Community College in Indiana. I earned my first degree in Software Development here, as well as a certificate in Software Application Development. My plan was always to get a 4 year degree, so I immediately transferred to IUPUI to earn my B.S in Informatics. This degree really helped me develop my technical skills as well as my user empathy skills since I was able to take many UX/ HCI based classes.</div>
            </div>
            <hr />
            <div className="area">
                <div className="text1"> I recently completed a year long internship as a web developer and designer which gave me a vast amount of real world experience using a CMS and creating ads for websites. I was able to sit in with vendors of the company and discuss website design and development on a weekly basis. I have spent many hours outside of school and internships to develop my web development abilities. I started with HTML and CSS, and worked my way up to where I am now. I am currently learning more backend technologies and frameworks, such as Node.js, to better be able to create dynamic websites and utilize servers. When I'm not in class you can find me reading. I have a crazy collection of books and the last time I counted I had about 300. I am so excited to hear any questions you may have, so please feel free to email me any time!</div>
                <div className="image2"></div>
            </div>
            <hr />
            <div className="area">
                <div className="image3"></div>
                <div className="text2">
                    <p>@ I enjoy rewatching Bridgerton every couple of months.</p>
                    <p>@ I love to read and own about 300 books.</p>
                    <p>@ I have watched The Hobbit trilogy 5 times.</p>
                    <p>@ I paint in my free time (acrylic and water).</p>
                    <p>@ I like to earn certificates in fun things, like graphic design.</p>
                    
                </div>
            </div>
            
        </div>
        
    </div>
    )
}
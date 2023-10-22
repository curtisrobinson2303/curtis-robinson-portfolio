import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { Nav } from "../components/Nav";

const inter = Inter({ subsets: ["latin"] });

const CustomImage = ({ src, alt, objectFit = "cover" }) => {
  return <Image src={src} fill={true} objectFit={objectFit} alt={alt} />;
};

export default function Home() {
  return (
    <div id="top" className="top">
      <Nav></Nav>

      <div className="content">
        <div className="landing-name">
          <div className="landing-name-image">
            <CustomImage
              src={"/bannerwelcome.png"}
              alt="crlogo"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="spacer"></div>
        <div className="landing-subtitle">
          <h2>Engineer Leader Dreamer</h2>
        </div>
        <div className="spacer"></div>
        <div className="photo-space">
          <div className="photo-space-container">
            <div className="photo-space-container-image">
              <CustomImage src={"/positano.JPG"} alt="positano" />
            </div>
            <div className="photo-space-container-image">
              <CustomImage src={"/interlaken.JPG"} alt="interlaken" />
            </div>
            <div className="photo-space-container-image">
              <CustomImage src={"/scdi.jpeg"} alt="scdi" />
            </div>
            <div className="photo-space-container-image">
              <CustomImage src={"/dronemttam.jpeg"} alt="dronemttam" />
            </div>
            <div className="photo-space-container-image">
              <CustomImage src={"/mttamsunset.jpeg"} alt="mttamsunset" />
            </div>
            <div className="photo-space-container-image">
              <CustomImage src={"/hawaiisunsethike.png"} alt="hawaiihike" />
            </div>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="welcome-space">
          <div className="welcome-space-container">
            <h1>Welcome </h1>
            <div className="welcome-space-container-image">
              <Image
                src={"/professionalPic2.JPG"}
                width={250}
                height={400}
                alt="profilepic"
              />
            </div>
            <h2>
              Check out my projects, work experience, and learn about my
              passions!
            </h2>
          </div>
        </div>

        <div className="spacer"></div>

        <div id="about-me-id">
          <div className="about-me">
            <div className="about-me-container">
              <h1>ABOUT ME</h1>
              <div className="line"></div>
              <h3>
                🚀 I&#39;m Curtis, a 3rd-year student at Santa Clara University
                pursuing a degree in Electrical & Computer Engineering. My
                passion lies in driving innovation in the world of technology,
                and I&#39;m always ready to embrace the cutting edge. From
                Artificial Intelligence to Quantum Computing, I&#39;m excited by
                it all. I have a knack for transforming ideas into reality, be
                it through designing computer hardware or crafting software
                solutions. It&#39;s the thrill of creation that keeps me going.
                As we navigate this ever-evolving tech landscape, I believe in
                the power of connection and collaboration. If you share my
                enthusiasm for shaping the future of technology, let&#39;s
                connect and make a difference together. Feel free to explore
                some of my projects and ideas at curtisrobinson.co and join me
                on this exhilarating journey!
              </h3>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
        <div id="my-life-id">
          <div className="my-life">
            <div className="my-life-container">
              <h1>MY LIFE</h1>
              <h2>ENERGY | CURIOSITY | PATIENCE</h2>
              <h3>
                Three key things that drive my day to day life below and above!
              </h3>
            </div>
          </div>
          <div className="threeThings">
            <div className="threeThings-container">
              <div className="threeThings-element">
                <CustomImage src={"/dronemttam.jpeg"} alt="dronemttam" />
              </div>
              <div className="threeThings-element">
                <CustomImage src={"/positanogreen.png"} alt="positanogreen" />
              </div>
              <div className="threeThings-element">
                <CustomImage src={"/justdoit.JPG"} alt="justdoit" />
              </div>
            </div>
            <div className="threeThings-container-text">
              <div className="threeThings-element-text">
                <h1>TECH</h1>
              </div>
              <div className="threeThings-element-text">
                <h1>NATURE</h1>
              </div>
              <div className="threeThings-element-text">
                <h1>MOTIVATION</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="spacer"></div>

        <div id="experience-id">
          <div className="experience">
            <div className="experience-container">
              <h1>EXPERIENCE</h1>
              <h2>Header 2</h2>
              <h3>Header 3</h3>
            </div>
          </div>
        </div>

        <div className="spacer"></div>

        <div id="leadership-id">
          <div className="leadership">
            <div className="leadership-container">
              <h1> LEADERSHIP </h1>
              <div className="line"></div>
              <h2> COMMUNICATION </h2>
              <div className="line"></div>
              <h3> DILIGENCE </h3>
              <div className="line"></div>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="leadership-element">
            <div className="leadership-container-element">
              <h1>National Socetiy of Black Engineers</h1>
              <h2>Public Relations Chair</h2>
              <h3>
                I stimulate positive community development by actively
                participating in engineering outreach programs, fundraising
                events, and chapter meetings. Alongside that, I revamped our
                online presence, creating our dynamic and integrated website and
                giving our social media identity a fresh new look. These efforts
                helped me foster a stronger sense of community and connection
                within our engineering circle, and I&#39;m proud of the impact
                my initiatives had on our community&#39;s growth and engagement.
              </h3>
              <Image
                src={"/NSBELogo.png"}
                width={250}
                height={400}
                alt="nsbelogo"
              />
            </div>
            <div className="line"></div>
            <div className="leadership-container-element">
              <h1>Management Leadership for Tomorrow</h1>
              <h2>Career Prep Fellow & Recruitment Member</h2>
              <h3>
                I am currently part of an esteemed 18-month professional
                development program designed for high-achieving diverse talent,
                having been selected as one of the 1,000 participants. Within
                this program, I am actively engaged in honing my analytical,
                quantitative, and communication skills through the completion of
                business case studies and intensive projects. Additionally, I
                have the privilege of regularly participating in conferences
                hosted by industry leaders, including Apple, Deloitte, Google,
                Goldman Sachs, Clorox, Target, and Wells Fargo among many
                others. These ongoing experiences not only continue to enhance
                my professional expertise but also provide me with valuable
                networking opportunities and access to insights from experts in
                the field.
              </h3>
              <Image
                src={"/MLTlogo.jpg"}
                width={400}
                height={400}
                alt="mltlogo"
              />
            </div>
          </div>
        </div>

        <div className="spacer"></div>

        <div className="spacer"></div>

        <div id="projects-id">
          <div className="projects">
            <div className="projects-container">
              <h1>PROJECTS</h1>
              <h2>Header 2</h2>
              <h3>Header 3</h3>
            </div>
          </div>
        </div>

        <div className="spacer"></div>

        <div id="contact-me-id">
          <div className="contact-me">
            <div className="contact-me-container">
              <h1>CONTACT ME</h1>
              <h3>Feel free to contact me and checkout my work down below!</h3>
            </div>
          </div>
          <div className="spacer"></div>
          <Link
            href="https://github.com/curtisrobinson2303/Resume-Items"
            className="socialLinksButton"
          >
            <div className="contact-me-element">
              <h1>GITHUB</h1>
              {/* <Image
                src={"/GitHub_Logo.png"}
                width={500}
                height={1000}
                alt="githublogo"
              /> */}
            </div>
          </Link>
          <div className="spacer"></div>
          <Link
            href="https://www.linkedin.com/in/curtisrobinson2303/"
            className="socialLinksButton"
          >
            <div className="contact-me-element">
              <h1>LINKEDIN</h1>
              {/* <Image
                src={"/LI-Logo.png"}
                width={500}
                height={1000}
                alt="linkedinlogo"
              /> */}
            </div>
          </Link>
          <div className="spacer"></div>
          <Link href="" className="socialLinksButton">
            <div className="contact-me-element">
              <h1>EMAIL</h1>
              {/* <Image
                src={"/mailicon.png"}
                width={100}
                height={1000}
                alt="mailicon"
              /> */}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

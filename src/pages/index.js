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
              I am happy you made it! Check out my projects, work experience,
              and learn about my passions!
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
                Below are several things that motivate me each day. I love
                nature and experiecing the crazy things that world has to offer.
                Traveling and experiecing different cultures motivates me each
                day and encourage me to create and develop solutions to make
                peoples lives lower stress and easier around the world.
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
            </div>
          </div>
          <div className="spacer"></div>
          <div className="experience-element">
            <div className="experience-container-element">
              <h1>Software Engineering Intern</h1>
              <h2>Otherworld Computing Intership Summer 2023</h2>
              <h3>
                Throughout my internship, I gained valuable experience and
                wisdom that have significantly contributed to my professional
                growth. I had the opportunity to optimize driver subroutines by
                implementing shippable Single Instruction Multiple Data (SIMD)
                subroutines across various Instruction Set Architectures (ISA).
                This enhanced my technical skills and deepened my understanding
                of software optimization and the complexities between low-level
                software and hardware. I also played a crucial role in ensuring
                reliability testing by developing C++/C test tools to analyze
                and debug issues with our SoftRAID application. This experience
                honed my programming fluency in C++, C, and Assembly Language as
                well as emphasized the importance of thorough testing in
                software development. In summary, my internship during the
                summer of 2023 provided me with a diverse skill set, including
                software optimization, programming, bug tracking, and debugging
                techniques providing invaluable experience for my career
                development in the field of computer engineering.
              </h3>
              <h4>
                ● Optimized driver subroutines by implementing shippable Single
                Instruction Multiple Data (SIMD) subroutines on multiple
                Instruction Set Architectures (ISA)
              </h4>
              <h4>
                ● Assisted in reliability and quality assurance by developing
                C++/C test tools for CopyThat and SoftRAID applications
              </h4>
              <h4>
                ● Investigated, tracked, and logged Redundancy Array of
                Independent Disks (RAID) software and hardware bugs utilizing
                Atlassian tools
              </h4>
              <h4>
                ● Developed driver-level debug scripts to assist with low-level
                debugging to implement efficiency and simplicity
              </h4>
              <h3></h3>
            </div>
            <div className="experience-line"></div>
            <div className="experience-container-element">
              <h1>Quality Assurance Intern</h1>
              <h2>Otherworld Computing Intership Summer 2022</h2>
              <h3>
                During my first year at Other World Computing, my role consisted
                of Bug Tracking, Hardware testing for reliability, customer
                support, and test tool programming. I worked alongside a team of
                hardware and software engineers to debug and improve the user
                experience and ease of use for the SoftRAID and CopyThat
                applications. These responsibilities developed my attention to
                detail and emphasized the importance of testing before a product
                is shipped.
              </h3>
              <h4>
                ● Worked with Atlassian Tools to track hardware and software
                RAID system bugs.
              </h4>
              <h4>
                ● Spearheaded software reliability testing prior to software &
                hardware releases
              </h4>
              <h3></h3>
            </div>
            <div className="experience-line"></div>
            <div className="experience-container-element">
              <h1>Assistant Software Developer</h1>
              <h2>VarsityPrep 2018 - 2021</h2>
              <h3>
                I had the opportunity to work closely with the head software
                engineer, collaborating to enhance user experience and
                streamline back-end communication processes utilizing Firebase.
                This hands-on experience allowed me to develop a deeper
                understanding of software development and problem-solving in a
                real-world context. I gained practical experience by utilizing
                Firebase, Xcode, and App Store Connect&#39;s cloud-based app
                development tools for hosting and storing user data. This
                experience expanded my skill set in app development and cloud
                computing, providing me with valuable insights into modern
                development practices. Throughout my experience, I played a role
                in improving the company&#39;s branding and actively
                participated in marketing and ad-production efforts. This
                allowed me to explore the creative side of the industry and
                understand the importance of effective marketing strategies. In
                addition to these experiences, my internship provided me with
                the opportunity to coach and mentor fellow team members, which
                enhanced my leadership and communication skills, reinforcing the
                importance of teamwork and collaboration in achieving project
                goals.
              </h3>
              <h4>
                ● Collaborated with head software engineer to debug/improve user
                experience and back-end communication processes
              </h4>
              <h4>
                ● Utilized Firebase and App Store Connects cloud-based app
                development tools for hosting and user data storage
              </h4>
              <h4>
                ● Improved company branding and participated in marketing and
                ad-production
              </h4>
              <h3></h3>
            </div>
            <div className="experience-line"></div>
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
              <h2></h2>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="spacer"></div>
          <div className="projects-element">
            <h1>Analog to Digital Converter</h1>
            <h2>
              In my computer engineering microprocessor system design class, I
              worked on a fascinating project where I designed analog-to-digital
              converters (ADCs) utilizing FPGA technology and Xilinx Vivado.
              This project was a testament to my hands-on experience in digital
              system design and FPGA programming. By creating custom ADCs, I
              gained practical insights into the nuances of signal processing,
              data conversion, and hardware design. This endeavor not only
              broadened my understanding of microprocessor systems but also
              honed my proficiency in FPGA development, showcasing my commitment
              to mastering the intersection of hardware and software in the
              field of computer engineering.
            </h2>
            <div className="project-button">
              <Link
                href="https://github.com/curtisrobinson2303/Resume-Items"
                className="projectsButton"
              >
                <h1>View Project</h1>
              </Link>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="projects-element">
            <h1>NSBE Chapter Website</h1>
            <h2>
              In my computer engineering microprocessor system design class, I
              worked on a fascinating project where I designed analog-to-digital
              converters (ADCs) utilizing FPGA technology and Xilinx Vivado.
              This project was a testament to my hands-on experience in digital
              system design and FPGA programming. By creating custom ADCs, I
              gained practical insights into the nuances of signal processing,
              data conversion, and hardware design. This endeavor not only
              broadened my understanding of microprocessor systems but also
              honed my proficiency in FPGA development, showcasing my commitment
              to mastering the intersection of hardware and software in the
              field of computer engineering.
            </h2>
            <div className="project-button">
              <Link
                href="https://github.com/curtisrobinson2303/Resume-Items"
                className="projectsButton"
              >
                <h1>View Project</h1>
              </Link>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="projects-element">
            <h1>Passive Filter Design</h1>
            <h2>
              During my advanced circuits class, I undertook a challenging
              passive filter design project that underscored my proficiency in
              circuit analysis and simulation using MATLAB. The project involved
              creating passive filters for specific applications, demonstrating
              my ability to navigate complex electrical circuits with precision.
              Through rigorous analysis and meticulous MATLAB simulations, I
              fine-tuned the filters to meet exacting requirements, showcasing
              my skills in both theoretical and practical aspects of electrical
              engineering. This project not only deepened my understanding of
              circuit design but also validated my capacity to translate theory
              into real-world solutions.
            </h2>
            <div className="project-button">
              <Link
                href="https://github.com/curtisrobinson2303/Resume-Items"
                className="projectsButton"
              >
                <h1>View Project</h1>
              </Link>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="projects-element">
            <h1>Data Corruption Test Tool</h1>
            <h2>
              During my last internship at Other World Computing, I embarked on
              an exciting project where I developed a low-level data corruption
              testing tool. This tool was designed to read memory from a hard
              drive using C++ and perform hex dumping of the values. What set
              this project apart was its ability to run comparison operations,
              effectively detecting data corruption at the driver level in RAID
              systems. It was a challenging yet incredibly rewarding endeavor
              that allowed me to hone my programming skills and delve deep into
              the intricacies of storage systems, ensuring data integrity and
              reliability at a fundamental level.
            </h2>
            <div className="project-button">
              <Link
                href="https://github.com/curtisrobinson2303/Resume-Items"
                className="projectsButton"
              >
                <h1>View Project</h1>
              </Link>
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

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
        <div class="landing-name">
          <div class="landing-name-container">
            <div class="landing-name-container-image">
              {/* <CustomImage src={"/smile.png"} alt="positano" /> */}
            </div>
            <div class="landing-name-text">
              <h1>CURTIS</h1>
              {/* <div className="hero-landing"></div> */}
              <h1>ROBINSON</h1>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
        <Link href="#projects-id" className="socialLinksButton">
          <div className="jump-projects">
            <div className="jump-projects-container">
              <div className="jump-projects-arrow">
                {/* <CustomImage src={"/right-arrow.png"} alt="positano" /> */}
              </div>
              <h1>JUMP TO PROJECTS</h1>
              <div className="jump-projects-arrow">
                {/* <CustomImage src={"/left-arrow.png"} alt="positano" /> */}
              </div>
            </div>
          </div>
        </Link>
        <div id="about-me-id">
          <div className="spacer"></div>
          <div className="section-title">
            <div className="section-title-text">
              <h1> Welcome</h1>
              <h2>01</h2>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="landing-subtitle">
            <h1>Engineer</h1>
          </div>
          <div className="spacer"></div>
          <div className="landing-subtitle">
            <h2>Leader</h2>
          </div>
          <div className="spacer"></div>
          <div className="landing-subtitle">
            <h3>Dreamer</h3>
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
                <CustomImage src={"/nikelebron.png"} alt="dronemttam" />
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
          <div className="about-me">
            <div className="about-me-container">
              <h1>ABOUT ME</h1>
              <div className="line"></div>
              <h3>
                🚀 I&#39;m Curtis, a 4th-year student at Santa Clara University
                pursuing a degree in Electrical & Computer Engineering. My
                passion lies in driving innovation in the world of technology,
                and I&#39;m always ready to embrace the cutting edge. From
                <strong className="bolded-inline-text">
                  {" "}
                  Artificial Intelligence to Quantum Computing
                </strong>
                , I&#39;m excited by it all. I have a knack for transforming
                ideas into reality, be it through designing computer hardware or
                crafting software solutions. It&#39;s the thrill of creation
                that keeps me going. As we navigate this ever-evolving tech
                landscape, I believe in the power of{" "}
                <strong className="bolded-inline-text">
                  connection and collaboration.
                </strong>{" "}
                If you share my enthusiasm for shaping the future of technology,
                let&#39;s connect and make a difference together. Feel free to
                explore some of my projects and ideas at{" "}
                <strong className="bolded-inline-text">
                  www.curtisrobinson.co
                </strong>{" "}
                and join me on this exhilarating journey!
              </h3>
            </div>
          </div>
        </div>
        <div id="my-life-id">
          <div className="spacer"></div>
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
        <div id="experience-id">
          <div className="spacer"></div>
          <div className="section-title">
            <div className="section-title-text">
              <h1>EXPERIENCE</h1>
              <h2>02</h2>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="experience-element">
            <div className="experience-container-element">
              <h1>
                Autonomous Infrastructure Embedded Software Engineering Intern
              </h1>
              <h2>Rivian Automotive, Palo Alto, CA | Summer 2024</h2>
              <h3>
                During my internship at Rivian Automotive, I contributed to the
                development and optimization of autonomous systems, gaining
                extensive experience in embedded software engineering and
                manufacturing line improvements. I had the opportunity to{" "}
                <strong className="bolded-inline-text">
                  design and implement ADAS camera installation, calibration,
                  and detection frameworks in C++,
                </strong>{" "}
                which optimized manufacturing line accuracy and reduced triage
                time for incorrect installations by 97%. This experience
                enhanced my technical expertise in{" "}
                <strong className="bolded-inline-text">
                  manufacturing process optimization
                </strong>{" "}
                and diagnostic tools. Additionally, I significantly improved
                unit test code coverage for the autonomy control module’s
                diagnostics component, utilizing UDS and DOIP protocols along
                with modern testing frameworks. My contributions included
                streamlining testing and debugging processes, as well as
                developing innovative 3D-printed solutions to support R&D
                efforts.
              </h3>
              <h4>
                ● Designed and implemented ADAS camera installation,
                calibration, and detection frameworks in C++, optimizing
                manufacturing line accuracy and reducing triage time by 97%
              </h4>
              <h4>
                ● Increased unit test code coverage of the autonomy control
                module’s diagnostics component by 80%, utilizing UDS and DOIP
                data transfer protocols, GoogleTest framework, and YAML
                configurations
              </h4>
              <h4>
                ● Developed 6 Bash scripts for log retrieval, flashing,
                connection status monitoring, and low-level debugging, reducing
                overall testing time by 57%
              </h4>
              <h4>
                ● Created intuitive 3D-printed mounting brackets for 10 ADAS
                camera calibration charts, streamlining R&D on autonomy test
                benches
              </h4>
              <h3></h3>
              <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                <Image
                  src="/Rivian Logo Gold.png"
                  width={400}
                  height={400}
                  objectFit="cover"
                  alt="rivianlogo"
                />
              </div>
              <h3></h3>
            </div>
            <div className="experience-line"></div>
            <div className="experience-container-element">
              <h1>Embedded Software Engineering Intern</h1>
              <h2>Otherworld Computing Intership Summer 2023</h2>
              <h3>
                Throughout my internship, I gained valuable experience and
                wisdom that have significantly contributed to my professional
                growth. I had the opportunity to{" "}
                <strong className="bolded-inline-text">
                  optimize driver subroutines by implementing shippable Single
                  Instruction Multiple Data (SIMD) subroutines{" "}
                </strong>{" "}
                across various Instruction Set Architectures (ISA). This
                enhanced my technical skills and deepened my understanding of
                <strong className="bolded-inline-text">
                  {" "}
                  software time complexity optimization{" "}
                </strong>
                and the complexities between low-level software and hardware. I
                also played a crucial role in ensuring reliability testing by
                developing C++/C test tools to analyze and debug issues with our
                SoftRAID application. This experience honed my programming
                fluency in C++, C, and Assembly Language as well as emphasized
                the importance of thorough testing in software development. In
                summary, my internship during the summer of 2023 provided me
                with a diverse skill set, including software optimization,
                programming, bug tracking, and debugging techniques providing
                invaluable experience for my career development in the field of
                computer engineering.
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
                ● Created optimal{" "}
                <strong className="bolded-inline-text">kernel panic log</strong>{" "}
                scripts to increase reliability for 50+ customer support team
              </h4>
              <h4>
                ● Investigated, tracked, and logged Redundancy Array of
                Independent Disks (RAID) software and hardware bugs utilizing
                Atlassian tools
              </h4>
              <h4>
                ● Developed{" "}
                <strong className="bolded-inline-text">
                  driver-level debug scripts
                </strong>{" "}
                to assist with low-level debugging to implement efficiency and
                simplicity
              </h4>

              <h3></h3>
              <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                <Image
                  src="/owc-logo.png"
                  width={300}
                  height={300}
                  objectFit="cover"
                  alt="owclogo"
                />
              </div>
              <h3></h3>
            </div>
            <div className="experience-line"></div>
            <div className="experience-container-element">
              <h1>Embedded Software Quality Assurance Intern</h1>
              <h2>Otherworld Computing Intership Summer 2022</h2>
              <h3>
                During my first year at Other World Computing, my role consisted
                of{" "}
                <strong className="bolded-inline-text">
                  Bug Tracking, Hardware testing
                </strong>{" "}
                for reliability, customer support, and test tool programming. I
                worked alongside a team of hardware and software engineers to
                debug and improve the user experience and ease of use for the
                SoftRAID and CopyThat applications. These responsibilities
                developed my attention to detail and emphasized the importance
                of testing before a product is shipped.
              </h3>
              <h4>
                ● Worked with{" "}
                <strong className="bolded-inline-text">Atlassian Tools</strong>{" "}
                to track hardware and software RAID system bugs.
              </h4>
              <h4>
                ● Spearheaded software reliability testing prior to software &
                hardware releases
              </h4>
              <h3></h3>
              <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                <Image
                  src="/owc-logo.png"
                  width={300}
                  height={300}
                  objectFit="cover"
                  alt="owclogo"
                />
              </div>
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
                ● Utilized{" "}
                <strong className="bolded-inline-text">
                  Firebase and App Store Connects
                </strong>{" "}
                cloud-based app development tools for hosting and user data
                storage
              </h4>
              <h4>
                ● Improved company branding and participated in marketing and
                ad-production
              </h4>
              <h3></h3>
              <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                <Image
                  src={"/varsityPrep.png"}
                  width={300}
                  height={300}
                  objectFit="cover"
                  alt="varsityPrepLogo"
                />
              </div>
              <h3></h3>
            </div>
            <div className="experience-line"></div>
          </div>
        </div>
        <div id="leadership-id">
          <div className="spacer"></div>
          <div className="section-title">
            <div className="section-title-text">
              <h1>LEADERSHIP</h1>
              <h2>03</h2>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="leadership">
            <div className="leadership-container">
              <h1> PERSISTANCE </h1>
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
              <h1>National Society of Black Engineers</h1>
              <h2>Public Relations Chair</h2>
              <h3>
                I stimulate positive community development by actively
                participating in engineering{" "}
                <strong className="bold-inline-text">outreach programs,</strong>{" "}
                fundraising events, and chapter meetings. Alongside that, I
                revamped our online presence, creating our{" "}
                <strong className="bold-inline-text">
                  dynamic and integrated website
                </strong>{" "}
                and giving our social media identity a fresh new look. These
                efforts helped me foster a stronger sense of community and
                connection within our engineering circle, and I&#39;m proud of
                the impact my initiatives had on our community&#39;s growth and
                engagement.
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
              <div style={{ borderRadius: "10px", overflow: "hidden" }}>
                <Image
                  src={"/MLTLogoT.png"}
                  width={400}
                  height={400}
                  alt="mltlogo"
                  border-radius="10px"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="projects-id">
          <div className="spacer"></div>
          <div className="section-title">
            <div className="section-title-text">
              <h1>PROJECTS</h1>
              <h2>04</h2>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="projects-element">
            <h1>USB Music Player / Audio Intensity Sensor </h1>
            <h2>
              I created a USB music player that utilizes a double buffer system
              to read and play specific signals of our choice. Each of my
              buffers held 1 second of data using the 16-bit unsigned music
              files which are sampled at 16KHz. Once the buffers are full with a
              part of the sampled file I then outputted the total entries from
              that buffer and then switch to the other to output the next second
              while refilling the first to continue through the song. Then I
              developed a program that takes the outputted sine wave and samples
              it by taking the peak values for each period. These peaks are then
              displayed on the LED strip dynamically. Check out the demo below
              to observe it in action!
            </h2>
            <h3>Skills Demonstrated:</h3>
            <h2> - C / Data Structures </h2>
            <h2> - Real-Time Embedded Systems Design </h2>
            <h2> - STMicro CubeMX</h2>
            <div className="project-button">
              <Link
                href="https://drive.google.com/drive/folders/1iKybxCMZgzyoLiD_Mrs_-aFrYB5UPuSo?usp=sharing"
                className="projectsButton"
              >
                <h1>View Demo</h1>
              </Link>
            </div>
            <div className="spacer"></div>
            <div className="project-button">
              <Link
                href="https://github.com/curtisrobinson2303/Resume-Items/tree/main/AUDIO_INTENSITY_LED_PROJECT"
                className="projectsButton"
              >
                <h1>View Source Code</h1>
              </Link>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="projects-element">
            <h1>Analog to Digital Converter</h1>
            <h2>
              In my computer engineering microprocessor system design class, I
              worked on a fascinating project where I designed analog-to-digital
              converters (ADCs) utilizing
              <strong className="bold-inline-text">
                FPGA technology and Xilinx Vivado.
              </strong>
              This project was a testament to my hands-on experience in digital
              system design and FPGA programming. By creating custom ADCs, I
              gained practical insights into the nuances of signal processing,
              data conversion, and hardware design. This endeavor not only
              broadened my understanding of microprocessor systems but also
              honed my proficiency in FPGA development, showcasing my interest
              into the intersection of hardware and software in the field of
              computer engineering.
            </h2>
            <h3>Skills Demonstrated:</h3>
            <h2> - Assembly Language </h2>
            <h2> - Xilinx Vivado & CubeMX</h2>
            <h2> - FPGA Development</h2>
            <div className="project-button">
              <Link
                href="https://github.com/curtisrobinson2303/Resume-Items/blob/main/A_D%20and%20D_A%20Converters%20-%20Project%20Report%20%237%20.pdf"
                className="projectsButton"
              >
                <h1>Check out my project!</h1>
              </Link>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="projects-element">
            <h1>NSBE Chapter Website</h1>
            <h2>
              During my time on the National Society of Black Engineers
              executive board at Santa Clara University I had the chance to
              pioneer a new method for outreach, opportunities, and
              communication for our chapter. As Public Realations Chair I
              undertook the challenge of developing a chapter website from
              scrath. With no previous front-end experience, I spend several
              weeks diving into the world of front end development to diversify
              my skill set. This website is culmination of my front end dev work
              from september 2023-present. It is still in development as I
              update styles and content weekly. You can find the repository on
              my github profile if interested!
            </h2>
            <h3>Skills Demonstrated:</h3>
            <h2> - HTML CSS Javascript </h2>
            <h2> - Git</h2>
            <h2> - Problem Solving</h2>
            <div className="project-button">
              <Link href="https://nsbescu.org/" className="projectsButton">
                <h1>View Deployed Website</h1>
              </Link>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="projects-element">
            <h1>Passive Filter Design</h1>
            <h2>
              During my advanced circuits class, I undertook a challenging
              passive filter design project that underscored my proficiency in
              <strong className="bold-inline-text">
                circuit analysis and simulation using MATLAB.
              </strong>{" "}
              The project involved creating passive filters for specific
              applications, demonstrating my ability to navigate complex
              electrical circuits with precision. Through rigorous analysis and
              meticulous MATLAB simulations, I fine-tuned the filters to meet
              exacting requirements, showcasing my skills in both theoretical
              and practical aspects of electrical engineering. This project not
              only deepened my understanding of circuit design but also
              validated my capacity to translate theory into real-world
              solutions.
            </h2>
            <h3>Skills Demonstrated:</h3>
            <h2> - Advanced Circuit Analysis </h2>
            <h2> - MATLAB </h2>
            <h2> - Time Varying Signals</h2>
            <div className="project-button">
              <Link
                href="https://github.com/curtisrobinson2303/Resume-Items/blob/main/ELEN%20100%20FINAL%20PROJECT%201%20LAB%20REPORT%20.pdf"
                className="projectsButton"
              >
                <h1>Check out my report!</h1>
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
              this project apart was its ability to run{" "}
              <strong className="bold-inline-text">
                comparison operations, effectively detecting data corruption at
                the driver level in RAID systems
              </strong>
              . It was a challenging yet incredibly rewarding endeavor that
              allowed me to hone my programming skills and delve deep into the
              intricacies of storage systems memory protocols, ensuring data
              integrity and reliability at a fundamental level.
            </h2>
            <h3>Skills Demonstrated:</h3>
            <h2> - C++ </h2>
            <h2> - State-Machine Analysis </h2>
            <h2> - Bash / Scripting Command Line Tool Dev</h2>
            <div className="project-button">
              <Link
                href="https://github.com/curtisrobinson2303/Resume-Items/tree/main/CorruptionTool"
                className="projectsButton"
              >
                <h1>View my source code</h1>
              </Link>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="projects-element">
            <h1>Personal Website!</h1>
            <h2>
              Throughout the last couple weeks I have developed this personal
              website. I started by applying my skills from the NSBE Chapter
              website and learned the fundamentals of{" "}
              <strong className="bold-inline-text">React and NextJs.</strong> I
              was able to gain a quick grasp on this framework due to my problem
              solving flexibility and determination. This site is still in
              development and mobile responsiveness is coming!!
            </h2>
            <h3>Skills Demonstrated:</h3>
            <h2> - React </h2>
            <h2> - NextJs </h2>
            <h2> - Javascript, HTML, CSS</h2>
          </div>
        </div>
        <div id="contact-me-id">
          <div className="spacer"></div>
          <div className="section-title">
            <div className="section-title-text">
              <h1>CONTACT ME</h1>
              <h2>05</h2>
            </div>
          </div>
          <div className="spacer"></div>
          <div className="contact-me">
            <div className="contact-me-container">
              <h3>
                Thanks for checking out my personal website. I developed this
                entire website using NextJs, React, CSS, and HTML. The site is
                still under development and I am always adding new feature,
                styles, and content. Feel free to contact me and checkout more
                of my work down below!
              </h3>
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
          <Link
            href="mailto:curtisrobinson2303@gmail.com"
            className="socialLinksButton"
          >
            <div className="contact-me-element">
              <h1>EMAIL</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

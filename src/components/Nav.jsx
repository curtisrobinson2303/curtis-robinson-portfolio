import Link from "next/link";
import { useEffect, useState } from "react";

export const Nav = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    let scrollTimeout;
    const handleScroll = () => {
      setIsNavbarVisible(false);

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        setIsNavbarVisible(true);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isNavbarVisible]);

  return (
    <nav className={`navbar ${isNavbarVisible ? "" : "hidden"}`}>
      <div className="linksContainer">
        {/* <div className="fixed-center">Scroll position: {scrollY}px</div> */}
        <Link href="#about-me-id" className="navButton">
          ABOUT
        </Link>
        <Link href="#my-life-id" className="navButton">
          MY LIFE
        </Link>
        <Link href="#experience-id" className="navButton">
          EXPERIENCE
        </Link>
        <Link href="#leadership-id" className="navButton">
          LEADERSHIP
        </Link>
        <Link href="#projects-id" className="navButton">
          PROJECTS
        </Link>
        <Link href="#contact-me-id" className="navButton">
          CONTACT ME
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

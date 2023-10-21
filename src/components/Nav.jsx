import Link from "next/link";
import { useEffect, useState } from "react";

export const Nav = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Hide the navbar
      setIsNavbarVisible(false);

      // Clear the previous timeout (if any)
      clearTimeout(scrollTimeout);

      // Set a timeout to check if scrolling has stopped
      scrollTimeout = setTimeout(() => {
        // Show the navbar
        setIsNavbarVisible(true);
      }, 200); // Adjust the timeout duration as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Use inline styles to change the background color
  const navStyle = {
    background: isNavbarVisible ? "" : "red", // Change the color to red when hidden
  };

  console.log("NAVBAR ENABLED");

  return (
    <nav
      style={navStyle}
      className={`navbar ${isNavbarVisible ? "" : "hidden"}`}
    >
      <div className="linksContainer">
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

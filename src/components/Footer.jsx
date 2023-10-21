import Link from "next/link";
export const Footer = () => {
  return (
    <nav className="footer">
      <div className="footerContainer">
        <Link href="/" className="footButton">
          CONTACT
        </Link>
        <Link href="#top" className="footButton">
          BACK TO TOP
        </Link>
        <Link href="#contact-me-id" className="footButton">
          SOCIAL LINKS
        </Link>
      </div>
      {/* <Link href="/contact">Contact</Link> */}
    </nav>
  );
};

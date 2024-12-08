import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {new Date().getFullYear()} Macros. All rights reserved.
      </p>
      <div style={styles.links}>
        <a href="/privacy-policy" style={styles.link}>
          Privacy Policy
        </a>
        <a href="/terms-of-service" style={styles.link}>
          Terms of Service
        </a>
        <a href="/contact" style={styles.link}>
          Contact Us
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#007bff",
    color: "white",
    textAlign: "center",
    padding: "10px 20px",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0 -2px 6px rgba(0, 0, 0, 0.1)",
  },
  text: {
    margin: "0",
    fontSize: "14px",
  },
  links: {
    marginTop: "5px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#e3f2fd",
  },
};

export default Footer;

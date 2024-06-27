import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-serif text-primary-content text-center text-opacity-40">
      Copyright © {currentYear}
    </footer>
  );
};

export default Footer;

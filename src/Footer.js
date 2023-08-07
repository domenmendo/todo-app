import React from 'react';

function Footer() {
  return (
    <footer className="footer fixed-bottom bg-light py-3">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} TO-DO app. Domen Mihelič</p>
      </div>
    </footer>
  );
}

export default Footer;

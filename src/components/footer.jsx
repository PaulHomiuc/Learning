import React, { useState, useEffect } from 'react';
import './footer.css'
function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <p>Current Date and Time: 
        </p>
        <h3> {dateTime.toLocaleString()}</h3>
    </footer>
  );
}

export default Footer;

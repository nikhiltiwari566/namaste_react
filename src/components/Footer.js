// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      Created By
      <i className='fa-solid fa-heart'></i>
      <a href='https://www.linkedin.com' target='_blank'>
        Nikhil Kumar Tiwari
      </a>
    </div>
  );
};

export default Footer;

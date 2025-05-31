const Footer = () => {
  return (
    <div className='container'>
      <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top border-dark'>
        <div className='col-lg-4 d-flex align-items-center'>
          <span className=' text-secondary text-uppercase'>
            &copy; 2024-2025 :
            E-commerce Website 
          </span>
          <span className=' col-12 col-md-8 text-secondary align-items-center '>
                <li>International University</li>
                <li>Phone: 0969682941 </li>
                <li>Country: Viet Nam </li>
                <li>Location: Ho Chi Minh </li>
          </span>
          
        </div>
       
      
          
        <ul className='d-inline-flex p-2 nav nav-pills nav-justified mb-3 col-md-4 justify-content-end list-unstyled d-flex '>
          <li className='nav-item ms-3 '>
            
            <a href='/' className='nav-item nav-link active  border border-primary rounded   nav-link  text-secondary  text-uppercase '>
            <p class="text-white">HOME</p>
            </a>
          </li>
          <li className='nav-item ms-3'>
            <a
              href='/products'
              className='nav-item nav-link active  border border-primary rounded   nav-link  text-secondary  text-uppercase'
            >
              <p class="text-white">PRODUCTS</p>
            </a>       
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#f2f2f2',
      position: 'sticky',
      top: 0,
    }}>
      <h2>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          CPA Firm
        </Link>
      </h2>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/team">Team</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/newsroom">Newsroom</Link>
      </div>
    </div>
  );
}

export default Navbar;

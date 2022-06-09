import { Link, useHistory } from 'react-router-dom';
import './css/Header.css';

function Header() {
  return(
    <header className="header">
      <div className="col-2 p-0">
        <Link to="/">
          <img className="logo" src="/icons/npc.png" alt="logo" style={{height: "5rem"}} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
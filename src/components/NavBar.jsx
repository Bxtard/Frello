import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="header__nav">
      <a href="#" class="header__a">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png" alt="" class="header__logo"/>
      </a>
      <input type="checkbox" class="header__check" id="check"/>
      <label for="check" class="header__checkbtn">
        <i class="fa-solid fa-bars"></i>
      </label>
      <ul class="header__ul">
        <li>Features</li>
        <li>Solutions</li>
        <li><button></button></li>
        <li><button></button></li>
      </ul>
    </nav>
  )
}

export default NavBar

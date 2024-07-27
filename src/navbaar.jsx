import { Link } from "react-router-dom";
import './App.css';
import picklulogo from './images/logo.webp';

 const Navbaar = () => {
   return (
     <nav className="navbar">
      <div className="logo">
      <img src={picklulogo} alt="" />
      </div>
       <ul className="navMenu">
         <li className="navLink">
           <Link to="/">Home</Link>
         </li>
         <li className="navLink">
           <Link to="/">Home</Link>
         </li>
         <li className="navLink">
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="/contact">Contact</Link>
         </li>
       </ul>
     </nav>
   );
 }

 export default Navbaar
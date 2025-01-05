import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import b from "@/app/image.png";

export default function Home() {
  return (
    <div> 
      <header>
        <h1 className="logo">Profile</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </nav>
        <div className="icon">
          <a href="#"><FaShoppingCart /></a>
          <a href="#"><FaHeart /></a>
          <a href="#"><VscThreeBars /></a>
        </div>
      </header>

      <section className="Home">
        <div className="content">
          <h4>Hello, it's me</h4>
          <h1><span>Hassan Ahmed Khan</span> <br/> frontend developer</h1>
             <Image src={b} alt="profile" width={150} height={160} className="profile-picture absolute right-[200px] top-[150px] rounded-[100%]"  />
          <p>Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Nihil sit corporis expedita!</p>

          <div className="button">
            <a href="#" className="btn1">let's talk</a>
            <a href="#" className="btn2">portfolio</a>
          </div>
        </div>

        <div className="social">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </section>
    </div>
  );
}

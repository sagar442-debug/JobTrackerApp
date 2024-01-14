import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import logo from '../assets/images/logo.svg'
import { Link } from "react-router-dom";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam tenetur itaque iusto quia atque qui? Debitis nihil, exercitationem provident eius voluptate dolores ipsam reiciendis recusandae, maiores sunt culpa esse rem consequatur minima.</p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  )
}



export default Landing

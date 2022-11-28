import { Link } from "react-router-dom";
import logo from "../resources/logo.png";
import search from "../resources/search.png";
import {categories} from "../util/categories";

const Header = () =>{
  const handleKeyPress = e => {
    // if(e.key === 'Enter') {
    //   console.log(e.target.value);
    //   localStorage.setItem("write", "search");
    //   window.location.replace(`/search/${e.target.value}`);
    // }
  }

  return(
    <div className="header">
      <div className="headerTop">
        <div className="headerLogo">
          <Link to="/main"><img src={logo} alt="개발하는 커비"/></Link>
        </div>
        <div className="headerSearch">
          <input type="text" placeholder=""
          onKeyPress={handleKeyPress}/>
          <img src={search} alt="검색"/>
        </div>
        <div className="headerLogin">
          <button>로그인</button>
          {/* 로그인시
          <Link to="/main"><img src={logo} alt="내정보"/></Link>
          <Link to="/main"><img src={logo} alt="채팅"/></Link>
          */}
        </div>
      </div>
      <div className="headerBottom">
        <div className="headerCategory">
          {categories.map((category) => (
            <Link to ={`/category/${category.value}`}>{category.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
import { Link } from "react-router-dom";
import fashionImg from "../resources/fashion_sample.png"
const Card = ({lineUp, city, town}) =>{
  return(
    <div className="card">
      <Link>
      <div className="cardImg">
        <img src={fashionImg} alt="개발하는 커비"/>
      </div>
      <div className="cardDesc">

      </div>
      </Link>
    </div>
  );
}
export default Card
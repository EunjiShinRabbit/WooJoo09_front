import Map from "../components/Map"
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import profile from "../resources/profile_sample.png"
import grade1 from "../resources/grade_icon1_wreck.png"

const Detail = () =>{

  const [searchPlace, setSearchPlace] = useState("경희대학교 정문")

  const images = useRef([
    {src:'https://www.nintendo.co.kr/character/kirby/assets/img/home/kirby-forgotten-land-hero.jpg',
    url: '/category/fashion'}, 
    {src: 'https://www.nintendo.co.kr/front_images/news/1011/3f0153b93509b883f64237bc63502f42.jpg',
    url: '/category/beauty'}, 
    {src: 'https://www.nintendo.co.kr/front_images/news/924/aa92775cee80f39d0f6b5e30714ae1c9.jpg',
    url: '/category/life'}]);
  
    const [current, setCurrent] = useState(0);
    const [style, setStyle] = useState({
      marginLeft: `-${current}00%`
    });
    const imgSize = useRef(images.current.length);
  
    const moveSlide = (i) => {
      let nextIndex = current + i;
      
      if (nextIndex < 0) nextIndex = imgSize.current - 1;
      else if (nextIndex >= imgSize.current) nextIndex = 0;
  
      setCurrent(nextIndex);
    };
  
    useEffect(() => {
        setStyle({ marginLeft: `-${current}00%` });
    }, [current]);

  return(
    <div className="detail">
      <div className="detailCard">
        <div className="detailImg">
          <div className="slide">
            <div className="btn" onClick={() => { moveSlide(-1); }}>&lt;</div>
            <div className="window">
              <div className="flexbox" style={style}>
                {images.current.map((img, i) => (
                  <div
                    key={i}
                    className="img"
                    style={{ backgroundImage: `url(${img.src})` }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="btn2" onClick={() => { moveSlide(1); }}>&gt;</div>
          </div>
          <div className="position">
            {images.current.map((x, i) => (
              <div
                key={i}
                className={i === current ? 'dot current' : 'dot'}
                ></div>
            ))}
          </div>
        </div>
        {/* <div className="detailCardDesc">
        </div> */}
        <div className="cardDesc">
          <p>카테고리</p>
          <p className="detailName">상품이름은최대30자까지가능합니다최대30글자는이만큼입니다</p>
          <p>0000원</p>
          <p><span>수원시</span><span>영통구</span></p>
          <p><span>1 / N</span><span>D - 5</span></p>
          <p><span>직거래</span><span>택배</span></p>
        </div>
      </div>
      <button>참여하기</button>
      <div className="detailProfile">
        <div>
          <img src={profile} alt="기본프로필"/>
          <p><img src={grade1} alt="등급아이콘"/>닉네임은최대10글자</p>
        </div>
        <div>
          <p>상점 소개</p>
          <p>상점소개는최대500자까지가능합니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글자는이만큼입니다최대500글</p>
        </div>
        <div>
          <p>
            <p>공구 주최 횟수</p>
            <p><span>n</span><span> 번 이상</span></p>
          </p>
          <p>
            <p>공구 참여 횟수</p>
            <p><span>n</span><span> 번 이상</span></p>
          </p>
        </div>
      </div> 
      <div className="detailContent">
        <div className="detailDesc">

        </div>
        <div className="detailMethod">
          <div className="direct">
            <p>직거래 장소 : {searchPlace}</p>
            <Map searchPlace={searchPlace}/>
          </div>
          <div className="delivery">

            
          </div>
        </div>
      </div>
      <span>신고하기</span>
    </div>
  );
}
export default Detail
import { useState, useEffect } from "react";
import {categories, getCategory} from "../util/categories";
import Card from "./Card";
const Main = ({categoryName})=>{
  const [lineUp, setLineUp] = useState('recommand');
  const [city, setCity] = useState('none');
  const [town, setTown] = useState('');

  const location = [
    {}
  ]
  
  return(
    <div className={categoryName? "category" : "main"}>
      <p>{categoryName? getCategory(categoryName) : "오늘의 공구"}</p>
      <div>
        <div>
          <select
            value={lineUp}
            onChange={({ target: { value } }) => {
              setLineUp(value);
              // console.log(value)
            }}
          >
            <option value="recent">최신순</option>
            <option value="deadline">마감 임박순</option>
            <option value="recommand">추천순</option>
            <option value="lowPrice">낮은 가격순</option>
            <option value="highPrice">높은 가격순</option>
          </select>
          <select
            value={city}
            onChange={({ target: { value } }) => {
              setCity(value);
              // console.log(value)
            }}
          >
            <option value="none">지역 선택</option>
            <option value="seoul">서울시</option>
            <option value="hanam">성남시</option>
            <option value="suwon">수원시</option>
            <option value="yongin">용인시</option>
            <option value="hanam">하남시</option>
          </select>
          <select
            value={town}
            onChange={({ target: { value } }) => {
              setTown(value);
              // console.log(value)
            }}
          >
            <option value="none">지역 선택</option>
          </select>
          <button>등록하기</button>
          <Card/>
          <button>더보기</button>
          <button>맨위로</button>
        </div>
      </div>
    </div>
  );
}
export default Main
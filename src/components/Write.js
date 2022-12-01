import { useEffect, useState } from 'react'
import Map from './Map'
import {categories, citys, towns} from "../util/util"
import { storage } from "../api/firebase"

const Write = () =>{

  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [isName, setIsName] = useState('');
  const [nameMsg, setNameMsg] = useState('');
  const [price, setPrice] = useState('');
  const [city, setCity] = useState('none');
  const [town, setTown] = useState('all');
  const [countPartner, setCountPartner] = useState('');
  const [productDetail, setProductDetail] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [tradeMethod, setTradeMethod] = useState('');
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);

  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [representImg, setRepresentImg] = useState("");
  const [representUrl, setRepresentUrl] = useState("");
  const [representErr, setRepresentErr] = useState("");

  const [error, setError] = useState("");
 
  const [inputTradePlace, setInputTradePlace] = useState('');
  const [tradePlace, setTradePlace] = useState('');

  
  const [displayMap, setDisplayMap] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
    const name = e.target.value;
    if(name.length > 30){
      setIsName(false);
      setNameMsg("상품명은 한글 최대 10글자까지 가능합니다!");
    } else{
      setIsName(true);
    }
  }

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  }

  const onChangeTradePlace = (e) => {
    setInputTradePlace(e.target.value);
  }

  const handleAddress = () => {
    setTradePlace(inputTradePlace);
    setDisplayMap(!displayMap);
  }
  const handleDisplayMap = () => {
    setDisplayMap(!displayMap);
  }


  const writeSubmit = ()=>{
    console.log("카테고리 : "+category);
    console.log("이름 : "+name);
    console.log("가격 : "+price);
  }

  const handleImage = (e) => {
    setUrls([]);
    let imgNum = 1;

    for(const image of e.target.files){
      setImages((prevState) => [...prevState, image]);
      imgNum++;
      console.log(imgNum);

      if(imgNum > 5){
        // setError("이미지 갯수 초과");
        break;
      }
    }
    if(imgNum > 5) setError("이미지 갯수 초과")
    else setError("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setError("");

    // if (images === "") {
    //   console.log("파일이 선택되지 않았습니다");
    //   setError("파일이 선택되지 않았습니다");
    //   return;
    // }

    // if ( images.length > 5){
    //   console.log(images.length);
    //   console.log("이미지는 대표이미지 포함 최대 6장까지 선택 가능합니다");
    //   setError("이미지는 대표이미지 포함 최대 6장까지 선택 가능합니다");
    //   setImages([]);
    //   setError("이미지는 대표이미지 포함 최대 6장까지만 업로드 가능합니다");
    // }

    let imgNum = 1;

    for (const image of images){
       // 업로드 처리
      console.log("업로드 처리");
      const storageRef = storage.ref("images/writeTest/"); //어떤 폴더 아래에 넣을지 설정
      const imgName = ("Img"+ imgNum);
      console.log("imgNum" + imgNum);
      const imagesRef = storageRef.child(imgName);
      // const imagesRef = storageRef.child(image.name); //파일명

      console.log("파일을 업로드하는 행위");
      const upLoadTask = imagesRef.put(image);
      console.log("태스크 실행 전");

      upLoadTask.on(
        "state_changed",
        (snapshot) => {
          console.log("snapshot", snapshot);
          const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(percent + "% done");
        },
        (error) => {
          console.log("err", error);
          setError("파일 업로드에 실패했습니다." + error);
        },
        () => {
          upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log("File available at", downloadURL);
            setUrls((prevState) => [...prevState, downloadURL]);
          });
        }
      );
      imgNum++;
    }
    setImages([]);
  };

  const handleImageRepresent = (event) => {
    const image = event.target.files[0];
    setRepresentImg(image);
    console.log(image);
    setRepresentErr("");
  };

  const onSubmitRepresent = (event) => {
    event.preventDefault();
    setError("");
    if (representImg === "") {
      console.log("파일이 선택되지 않았습니다");
      setRepresentErr("파일이 선택되지 않았습니다");
      return;
    }
    // 업로드 처리
    console.log("업로드 처리");
    const storageRef = storage.ref("images/profile/"); //어떤 폴더 아래에 넣을지 설정
    const imgName = ("represent");
    const imagesRef = storageRef.child(imgName);
    // const imagesRef = storageRef.child(image.name); //파일명

    console.log("파일을 업로드하는 행위");
    const upLoadTask = imagesRef.put(representImg);
    console.log("태스크 실행 전");

    upLoadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(percent + "% done");
      },
      (error) => {
        console.log("err", error);
        setRepresentErr("파일 업로드에 실패했습니다." + error);
      },
      () => {
        upLoadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log("File available at", downloadURL);
          setRepresentUrl(downloadURL);
        });
      }
    );
  };

  return(
    <div className="write">
      <p>공동 구매 등록</p>
      <div>
      <div className="categoryInput">
        <label>카테고리 선택
        <select
          value={category}
          onChange={({ target: { value } }) => {
            setCategory(value);
            console.log(value)
          }}
        >
          {categories.map((e) => (
            <option key={e.value} value={e.value}>
              {e.name}
            </option>
          ))}
        </select>
        </label>
      </div>
      <div className="nameInput">
        <label><span>상품명</span>
        <input onChange={onChangeName}/></label>
        {!isName && <span className="writeErr">{nameMsg}</span>}
      </div>
      <div className="priceInput">
        <label><span>가격</span>
        <input onChange={onChangePrice}/>
        <span>원</span></label>
      </div>
      <div className="loactionInput">
        <label><span>동네</span>
        <select
          value={city}
          onChange={({ target: { value } }) => {
            setCity(value);
            // console.log(value)
          }}
        >
          <option value="none">지역 선택</option>
          {citys.map((e) => (
            <option key={e.city} value={e.city}>
              {e.name}
            </option>
          ))}
        </select>
        <select
          value={town}
          onChange={({ target: { value } }) => {
            setTown(value);
            // console.log(value)
          }}
        >
          <option value="all">지역 전체</option>
          {towns
          .filter((e) => e.city === city)
          .map((e) => (
            <option key={e.town} value={e.town}>
              {e.name}
            </option>
          ))}
        </select>
        </label>
      </div>
      <div className="placeInput">
        <label htmlFor="tradePlace"><span>직거래 장소</span>
        <input id="tradePlace" placeholder="직거래 장소를 입력하세요" onChange={onChangeTradePlace} value={inputTradePlace} />
        {displayMap? <button onClick={handleDisplayMap}>지도 닫기</button> : 
        <button onClick={handleAddress}>지도 보기</button>}
        </label>
      </div>
      {displayMap && <Map searchPlace={tradePlace} />}
      </div>
      <div className='representInput'>
        {representErr && <p>{representErr}</p>}
          <form className="writeRepresentInput" onSubmit={onSubmitRepresent}>
            <input type="file" accept="image/*" onChange={handleImageRepresent} />
            <button onClick={onSubmitRepresent}>업로드</button>
          </form>
          {representUrl && (
            <div>
              <p> 이미지 미리보기</p>
              <img className="representImgPreview" src={representUrl} alt="uploaded" />
            </div>
          )}
      </div>
      <div className="imgInput">
        {error && <p>{error}</p>}
        <form className="writeImgInput" onSubmit={onSubmit}>
          <input multiple type="file" accept="image/*" onChange={handleImage} />
          <button onClick={onSubmit}>업로드</button>
        </form>
        {(urls.length >= 1) && (
          <div>
            <p> 이미지 미리보기</p>
            {urls.map((imageUrl)=>(<img className="writeImgPreview" src={imageUrl} alt="uploaded" />))}
          </div>
        )}
      </div>
      <button onClick={writeSubmit}>등록</button>
    </div>
  );
}
export default Write
import { useEffect, useState } from 'react'
import Map from './Map'

const Write = () =>{

  const [InputText, setInputText] = useState('')
  const [Place, setPlace] = useState('')

  const onChange = (e) => {
    setInputText(e.target.value)
  }

  const handleAddress = () => {
    setPlace(InputText)
    setInputText('')
  }

  return(
    <div className="write">
      <div>
      <div className="placeInput">
        <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
        <button onClick={handleAddress}>검색</button>
      </div>
      <Map searchPlace={Place} />
      </div>
    </div>
  );
}
export default Write
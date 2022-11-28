const categories = [
  {
    name : "패션",
    value : "fashion"
  },
  {
    name : "뷰티",
    value : "beauty"
  },
  {
    name : "생활",
    value : "life"
  },
  {
    name : "식품",
    value : "food"
  },
  {
    name : "취미",
    value : "hobby"
  },
  {
    name : "반려동물",
    value : "pet"
  },
];

const getCategory = (category) =>{
  for(let e of categories){
    if(e.value === category) return e.name
  }
}


export {categories, getCategory}
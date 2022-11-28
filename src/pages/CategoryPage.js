import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from "../components/Header";
import Main from "../components/Main";

const CategoryPage = () =>{
  let { categoryName } = useParams();
  return(
    <div className="wrapper">
      <Header/>
      <Main categoryName = {categoryName}/>
      <Footer/>
    </div>
  );
}
export default CategoryPage
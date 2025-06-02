import {useParams, useNavigate} from 'react-router-dom';
export default function Products() {
  const { id } = useParams();
  const navigate = useNavigate();

  const chuyenSangTrangAbout = () => {
    navigate('/about');
  }

  return (
    <div>
      <h1>PRODUCTS PAGE</h1>
      <p>This is the products page of our application.</p>
      <p>Here you can find a list of all our products.</p>
       
      <p>Product ID: {id}</p>


        <button onClick={chuyenSangTrangAbout}>Go to About Page</button>
 
    </div>
  );
}
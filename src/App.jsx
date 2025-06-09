import { useSelector ,useDispatch} from "react-redux";
import { tang_gia_tri, giam_gia_tri,reset } from "./action/action";

function App() {
   const value = useSelector(state => state.updateReducer.value);
   const dispatch  = useDispatch();
   return (
    <>
       <h2> THONG BAO </h2>
       <button onClick={() => dispatch(tang_gia_tri())}> INCREMENT </button>
       <button onClick={() => dispatch(giam_gia_tri())}> DECREMENT </button>
       <button onClick={() => dispatch(reset())}> RESET </button>
       
       <h2> GIÁ TRỊ : {value}</h2>
  
      
    </> 
   );
}

export default App;

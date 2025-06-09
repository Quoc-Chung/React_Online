import { tooggle_theme } from "./actions/themeAction";
import { useSelector , useDispatch } from "react-redux";
function App() {
   const theme = useSelector((state) => state.themeReducer.theme);

  const dispatch = useDispatch();
  const isDark = theme === 'dark';

  const style = {
    backgroundColor: isDark ? '#121212' : '#ffffff',
    color: isDark ? 'white' : 'black',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };
   return (
    <div style={style}>
      <h1>{isDark ? 'Dark Mode' : 'Light Mode'}</h1>
      <button onClick={() => dispatch(tooggle_theme())}>
        Chuyển chế độ
      </button>
    </div>
  );
}

export default App;

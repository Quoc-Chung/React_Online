import React from "react";
import { an_noi_dung } from "./actions/an_noi_dung";
import { useSelector, useDispatch } from "react-redux";

function App() {
    const trang_thai = useSelector(state => state.an_noi_dungReducer.status);
    const dispatch = useDispatch();
    
    /*- Trang thai tra ve false khi nhan nut  -*/ 
    const an_ten = trang_thai === false ;

    return (
        <>
            <button onClick={() => dispatch(an_noi_dung())}>AN NOI DUNG</button>

            {
            !an_ten&& (
                <h3>TỪ QUỐC CHUNG</h3>
            )}
        </>
    );
}

export default App;

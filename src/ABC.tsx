import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './utils/store';
import { decremented, incremented } from './utils/redux';


const ABC = ()=>{
const {value} = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()
  return (
    <>
    <div className="App" onClick={()=>{dispatch(incremented())}}>
        {value}
    </div>
    <div className="App">
        <button onClick={()=>{dispatch(decremented())}}>---</button>
    </div>
    </>
  );
}

export default ABC



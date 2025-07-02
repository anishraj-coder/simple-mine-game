import {useGameStore} from "../Store/useGameStore.ts";
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "react-router-dom";

const Header=()=>{
    const {score,highest,reset}=useGameStore(useShallow(state=>({score:state.score,highest:state.highestScore,reset:state.resetGame})));
    const navigate= useNavigate();
    const handleReset=()=>{
        reset();
        navigate('/');
    }
    return(
        <div className={`bg-Background w-full h-20 border-b-1  border-divider flex justify-between px-7 lg:px-16 items-center gap-5`}>
            <h1 className={`text-ptext text-md md:text-2xl font-bold Gilroy`}>Score -  <span>{score}</span></h1>
            <button onClick={handleReset} className={`text-md px-4 py-2 rounded full bg-divider text-stext font-medium `}>Reset</button>
            <h1  className={`text-ptext text-md md:text-2xl font-bold Gilroy`}>Highest  -  <span>{highest}</span></h1>
        </div>
    )
}
export default  Header;
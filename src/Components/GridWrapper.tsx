import Cell from "./Cell.tsx";
import {useGameStore} from "../Store/useGameStore.ts";
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "react-router-dom";


const GridWrapper=()=>{
    const {grid,revealed,gameOver}=useGameStore(useShallow(state=>({grid:state.grid,revealed:state.revealed,gameOver:state.gameOver})));
    const navigate=useNavigate();
    const handleNew=()=>navigate('/');
    return(
        <div className="flex justify-center items-center w-fit h-full relative">
            <div className="grid grid-cols-4 gap-4 p-4 bg-Background rounded-xl border-2 border-divider max-w-md w-full relative overflow-hidden">
                {grid.map((value, index) => (
                    <Cell
                        key={index}
                        value={value}
                        index={index}
                        isHidden={revealed[index]}
                    />
                ))}
                {gameOver&&<div className={`w-full h-full absolute bg-accent/40 flex items-center justify-center `}>
                    <button onClick={handleNew} className={`bg-Background border-divider border-3 p-3 rounded-lg text-3xl font-bold Gilroy text-ptext text-center select-none cursor-pointer`}>Game Over<br/>Start new</button>
                </div>}
            </div>
        </div>
    );
}
export default GridWrapper;
import {type cellValue, useGameStore} from "../Store/useGameStore.ts";
import {useShallow} from "zustand/react/shallow";
interface props{
    value: cellValue,
    index:number,
    isHidden:boolean,
}
const Cell=({value,index,isHidden}:props)=>{
    const {setReveal,gameOver}=useGameStore(useShallow(state=>({setReveal:state.revealCell,gameOver:state.gameOver})));
    const handleClick=()=>{
        if(!gameOver){
            setReveal(index);
        }
    }
    return(
        <div className={`w-[50px] h-[50px] border-2 border-divider flex items-center justify-center rounded-md relative`}>
            <div onClick={()=>handleClick()} style={{opacity: isHidden?'0':'1'}} className={`cover w-full h-full bg-divider absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-100 cursor-pointer`}></div>
                <h1 className={`text-2xl`}>{!value?"💣":"💎"}</h1>
        </div>
    )
}
export default  Cell;
import {type cellValue, useGameStore} from "../Store/useGameStore.ts";
import {useShallow} from "zustand/react/shallow";
import {motion} from "motion/react";

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
            <motion.div  onClick={handleClick}
                        initial={{ scale: 1 }}
                        animate={{ scale: isHidden||gameOver ? 0 : 1 ,opacity: isHidden||gameOver?0.6:1}}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }} className={`cover w-full h-full rounded-sm bg-divider absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-100 cursor-pointer`}></motion.div>
                <h1 className={`text-2xl`}>{!value?"💣":"💎"}</h1>
        </div>
    )
}
export default  Cell;
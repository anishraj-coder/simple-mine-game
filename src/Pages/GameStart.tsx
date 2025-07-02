import {type FormEvent, useState} from "react";
import {useGameStore} from "../Store/useGameStore.ts";
import {useShallow} from "zustand/react/shallow";
import {useNavigate} from "react-router-dom";
import Header from "../Components/Header.tsx";

const GameStart=()=>{
    const {startGame}=useGameStore(useShallow(state=>({startGame:state.startGame})));
    const [prob, setProb] = useState<number|undefined>(80);
    const navigate=useNavigate();
    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        startGame(prob!);
        navigate('/game');
    }
    return(
        <div className={`w-full h-screen bg-Background `}>
            <Header/>
            <form className={`flex flex-col  items-center justify-center gap-4 h-[80vh]`} onSubmit={(e=>handleSubmit(e))}>
                <label htmlFor="input" className={`text-ptext font-medium Gilroy text-center text-xl italic`}>Enter the Probability</label>
                <input value={prob}  onChange={(e)=>setProb(Number(e.target.value))} type="number" className={`Gilroy text-2xl placeholder:text-sm text-center text-ptext px-4 p-2 w-1/3 rounded-xl  font-medium bg-accent outline-none active:outline-1 outline-divider lg:w-2/15 no-spinners`} placeholder={`Enter probability`}/>
                <button disabled={prob === undefined} className={`text-ptext Gilroy px-4 py-2 rounded-lg bg-accent outline-2 outline-accent active:outline-divider disabled:text-stext`}>Submit</button>
            </form>
        </div>
    );
}
export default GameStart
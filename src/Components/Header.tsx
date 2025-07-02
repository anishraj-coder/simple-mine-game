import {useGameStore} from "../Store/useGameStore.ts";

const Header=()=>{
    const score= useGameStore(state=>state.score);
    const highest= useGameStore(state=>state.highestScore)
    return(
        <div className={`bg-Background w-full h-20 border-b-1 border-divider flex justify-between px-7 lg:px-16 items-center gap-5`}>
            <h1 className={`text-ptext text-2xl font-bold Gilroy`}>Score -  <span>{score}</span></h1>
            <h1 className={`text-ptext text-2xl font-bold Gilroy`}>Highest  -  <span>{highest}</span></h1>
        </div>
    )
}
export default  Header;
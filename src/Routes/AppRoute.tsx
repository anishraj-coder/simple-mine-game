import {createBrowserRouter} from "react-router-dom";
import GameStart from "../Pages/GameStart.tsx";
import App from "../App.tsx";

export const AppRoute=createBrowserRouter([{path:'/',element:<GameStart/>},{path:'/game',element:<App/>}])
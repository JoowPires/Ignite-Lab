import { Routes, Route } from "react-router-dom";
import { Evento } from "./pages/Evento";
import { Subscriber } from "./pages/Subscriber";

export function Router(){
    return(
     <Routes>
        <Route path="/" element={<Subscriber />}/>
        <Route path="/event" element={<Evento/>}/>
        <Route path="/event/lesson/:slug" element={<Evento/>}/>
     </Routes>
    )
}
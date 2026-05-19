import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

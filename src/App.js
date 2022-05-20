import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />

          <Route path="/new-meetup" element={<NewMeetupPage />} />

          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
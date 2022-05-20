import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";
function FavouritesPage() {
  const favouritesCtx = useContext(FavouritesContext);
  return (
    <section>
      <h1>My Favourites</h1>
      <MeetupList meetups={favouritesCtx.favourites} />
    </section>
  );
}

export default FavouritesPage;

import { Link } from "react-router-dom";
import FavouritesContext from "../store/favourites-context";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";

function MainNavigation() {
  const favouritesCtx = useContext(FavouritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All MeetUps </Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New MeetUps </Link>
          </li>
          <li>
            <Link to="/favourites">
              My Favourites
              <span className={classes.badge}>
                {favouritesCtx.totalFavourites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

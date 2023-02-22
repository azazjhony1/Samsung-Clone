import "./App.css";
import Mobile from "./components/mobile";
import MonthsPick from "./components/monthsPick";
import Nav from "./components/nav";
import Week from "./components/week";
import Tv from "./components/Tv";
import HomeApp from "./components/homeAppliance";
import ExploreDesc from "./components/exploreDesc";
import Something from "./components/something";
import ListPara from "./components/listPara";
import FooterNav from "./components/footerNavigation";
import Copyright from "./components/copyright";
import Footer from "./components/footer";
import OffersPick from "./components/OffersPick";
import MobilePick from "./components/mobilePick";
import TvPick from "./components/tvPick";
import MachinePick from "./components/machinePick";
import MonthsPickCombined from "./components/monthsPickCombined";
import Week1 from "./components/week1";
import Week2 from "./components/week2";
import Week3 from "./components/week3";
import Week4 from "./components/week4";
import WeekCombined from "./components/WeekCombined";
import NavTopDown from "./components/navTopDown";
function App() {
  return (
    <>
      <Nav />
      <WeekCombined />
      <MonthsPickCombined />
      <Mobile />
      <Tv />
      <HomeApp />
      <ExploreDesc />
      <Something />
      <ListPara />
      <FooterNav />
      <Copyright />
      <Footer />
    </>
  );
}

export default App;

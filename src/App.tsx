import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import FashionMen from "./pages/FashionMen";
import FashionWomen from "./pages/FashionWomen";
import Cart from "./pages/Cart";
import About from "./pages/About";
import AllBrands from "./pages/AllBrands";
import ArtCraft from "./pages/ArtCraft";
import CaseStudy from "./pages/CaseStudy";
import Checkout from "./pages/Checkout";
import { ROUTES } from "./routes";
import Login from "./pages/Login";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import TermsAndConditions from "./pages/TermsAndConditions";
import ContactUs from "./pages/ContactUs";
import FashionKids from "./pages/FashionKids";
import Software from "./pages/Software";
import WallPainting from "./pages/WallPainting";
import HandCrafted from "./pages/HandCrafted";
import { useIdleTimer } from "react-idle-timer";
import { logOut } from "./services/api/API";
import openNotification from "./utils/OpenNotification";

function App() {
  const onIdle = async () => {
    await logOut();
    openNotification(
      "error",
      "User has been inactive for more than 10 minutes."
    );
  };

  useIdleTimer({
    onIdle,
    timeout: 1000 * 60 * 10,
    promptTimeout: 0,
    startOnMount: true,
    stopOnIdle: false,
    crossTab: false,
    syncTimers: 0,
    events: [
      "DOMMouseScroll",
      "beforeunload",
      "change",
      "click",
      "copy",
      "cut",
      "dblclick",
      "drag",
      "drop",
      "focus",
      "gotpointercapture",
      "volumechange",
      "wheel",
      "resize",
      "mousemove",
      "keydown",
      "mousewheel",
      "mousedown",
      "mouseover",
      "play",
    ],
  });
  return (
    <BrowserRouter>
      <Router>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path={ROUTES.fashionMen} element={<FashionMen />} />
          <Route path={ROUTES.fashionWomen} element={<FashionWomen />} />
          <Route path={ROUTES.fashionKids} element={<FashionKids />} />
          <Route path={ROUTES.cart} element={<Cart />} />
          <Route path={ROUTES.aboutUs} element={<About />} />
          <Route path={ROUTES.allBrands} element={<AllBrands />} />
          <Route path={ROUTES.artCraft} element={<ArtCraft />} />
          <Route path={ROUTES.software} element={<Software />} />
          <Route path={ROUTES.CaseStudy} element={<CaseStudy />} />
          <Route path={ROUTES.checkout} element={<Checkout />} />
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.privacy} element={<PrivacyPolicies />} />
          <Route path={ROUTES.terms} element={<TermsAndConditions />} />
          <Route path={ROUTES.contactUs} element={<ContactUs />} />
          <Route path={ROUTES.wallPainting} element={<WallPainting />} />
          <Route path={ROUTES.handCrafted} element={<HandCrafted />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}

export default App;

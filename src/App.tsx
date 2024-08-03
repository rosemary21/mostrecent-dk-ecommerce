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
// import Customise from "./pages/Customise";
import Login from "./pages/Login";
import PrivacyPolicies from "./pages/PrivacyPolicies";
import TermsAndConditions from "./pages/TermsAndConditions";
import ContactUs from "./pages/ContactUs";
import FashionKids from "./pages/FashionKids";
import Profile from "./pages/Profile";
import Software from "./pages/Software";
import WallPainting from "./pages/WallPainting";
import HandCrafted from "./pages/HandCrafted";

function App() {
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
          {/* <Route path={ROUTES.customise} element={<Customise />} /> */}
          <Route path={ROUTES.login} element={<Login />} />
          <Route path={ROUTES.privacy} element={<PrivacyPolicies />} />
          <Route path={ROUTES.terms} element={<TermsAndConditions />} />
          <Route path={ROUTES.contactUs} element={<ContactUs />} />
          <Route path={ROUTES.profile} element={<Profile />} />
          <Route path={ROUTES.wallPainting} element={<WallPainting />} />
          <Route path={ROUTES.handCrafted} element={<HandCrafted />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}

export default App;

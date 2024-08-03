import ArtCraftNavbar from "../components/artCraft/ArtCraftNavbar";
import Tab from "../components/login/Tab";
import LoginTab from "../components/login/LoginTab";
import SignUpTab from "../components/login/SignUpTab";
import Footer from "../components/general/Footer";
import { useAppContext } from "../contexts/AppContext";

export type LoginTabProps = "login" | "signup";

export default function Login() {
  const { tab, setTab } = useAppContext();

  return (
    <div className="w-screen">
      <ArtCraftNavbar />
      <div className="w-screen h-screen grid place-content-center">
        <div className="md:w-[479px] w-screen">
          <Tab tab={tab} setTab={setTab} />
          <div className="mt-2 w-full">
            {tab === "login" ? <LoginTab /> : <SignUpTab setTab={setTab} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

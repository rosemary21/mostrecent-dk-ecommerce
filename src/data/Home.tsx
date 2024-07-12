import { ROUTES } from "./Routes";
import FeaturesImage1 from "../assets/features-icon-1.svg";
import FeaturesImage2 from "../assets/features-icon-2.svg";
import FeaturesImage3 from "../assets/features-icon-3.svg";

export const homeNavs = [
  {
    id: 1,
    link: ROUTES.home,
    text: "Home",
    path: "",
  },
  {
    id: 2,
    link: ROUTES.fashion,
    text: "Fashion",
    path: "fashion",
  },
  {
    id: 3,
    link: ROUTES.artCraft,
    text: "Software",
    path: "art-craft",
  },
  {
    id: 4,
    link: ROUTES.about,
    text: "About",
    path: "about",
  },
  {
    id: 5,
    link: ROUTES.contactUs,
    text: "Contact Us",
    path: "contact-us",
  },
];

export const features = [
  {
    id: 1,
    title: "Software Development",
    subtitle:
      "Dkeralutive company to offer software services, focus on software solution so as to render service to its client",
    image: FeaturesImage1,
    initial: "-100%",
  },
  {
    id: 2,
    title: "Fashion Store",
    subtitle:
      "Dkeralutive company to offers various fashion products , focus on software solution so as to render service to its client",
    image: FeaturesImage2,
    initial: "100%",
  },
  {
    id: 3,
    title: "Design",
    subtitle:
      "Dkeralutive company offers design services,focus on providing high-level design consultation and strategic guidance to clients",
    image: FeaturesImage3,
    initial: "-100%",
  },
  {
    id: 4,
    title: "Arts and Craft",
    subtitle:
      "Dkeralutive company focus in arts and crafts, provides high-quality and bespoke artistic products, as well as specialized creative services",
    image: FeaturesImage1,
    initial: "100%",
  },
];

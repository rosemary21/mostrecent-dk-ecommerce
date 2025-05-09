import FeaturesImage1 from "/assets/features-icon-1.svg";
import FeaturesImage2 from "/assets/features-icon-2.svg";
import FeaturesImage3 from "/assets/features-icon-3.svg";
import { ROUTES } from "../routes";

export const homeNavs = [
  {
    id: 1,
    link: ROUTES.home,
    text: "Home",
    path: "",
  },
  {
    id: 2,
    link: ROUTES.fashionMen,
    text: "Fashion",
    path: "fashion",
  },
  {
    id: 3,
    link: ROUTES.software,
    text: "Technology",
    path: "software",
  },
  {
    id: 4,
    link: ROUTES.artCraft,
    text: "Art & Craft",
    path: "art-craft",
  },
  {
    id: 5,
    link: ROUTES.aboutUs,
    text: "About",
    path: "about",
  },
  {
    id: 6,
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
    link: "/software",
  },
  {
    id: 2,
    title: "Fashion Store",
    subtitle:
      "Dkeralutive company to offers various fashion products , focus on software solution so as to render service to its client",
    image: FeaturesImage2,
    initial: "100%",
    link: "/fashion-men",
  },
  {
    id: 3,
    title: "Design",
    subtitle:
      "Dkeralutive company offers design services,focus on providing high-level design consultation and strategic guidance to clients",
    image: FeaturesImage3,
    initial: "-100%",
    link: "/fashion-women",
  },
  {
    id: 4,
    title: "Arts and Craft",
    subtitle:
      "Dkeralutive company focus in arts and crafts, provides high-quality and bespoke artistic products, as well as specialized creative services",
    image: FeaturesImage1,
    initial: "100%",
    link: "/art-craft",
  },
];

export const testimonials = [
  {
    id: 1,
    testimonial:
      "We love Dkeralutive! Our designers were using it for their projects, so clients already knew what Dkeralutive was and how to use it.",
    name: "Ngozi Chioma",
    position: "Head of Software",
  },
  {
    id: 2,
    testimonial:
      "I didn't know designing in Webflow could be this individualized. I'd never considered it before, but Dkeralutive changed my mind.",
    name: "James Doe",
    position: "Head of Design",
  },
  {
    id: 3,
    testimonial:
      "We love Dkeralutive! Our designers were using it for their projects, so clients already knew what Dkeralutive was and how to use it.",
    name: "Philip Louis",
    position: "Head of Arts and Crafts",
  },
];

export const contents = [
  {
    id: 1,
    imageUrl: "/assets/content-1.png",
    title: "How to write content about your photographs",
    date: "August 15, 2021",
  },
  {
    id: 2,
    imageUrl: "/assets/content-2.png",
    title: "How to choose the right colors when creating a website?",
    date: "March 21, 2021",
  },
];

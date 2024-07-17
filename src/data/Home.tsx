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
    link: ROUTES.artCraft,
    text: "Software",
    path: "art-craft",
  },
  {
    id: 4,
    link: ROUTES.aboutUs,
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

export const sliders = [
  {
    id: 1,
    imageUrl: "/assets/slide-1.png",
  },
  {
    id: 2,
    imageUrl: "/assets/slide-2.png",
  },
  {
    id: 3,
    imageUrl: "/assets/slide-3.png",
  },
  {
    id: 4,
    imageUrl: "/assets/slide-4.png",
  },
  {
    id: 5,
    imageUrl: "/assets/slide-5.png",
  },
  {
    id: 6,
    imageUrl: "/assets/slide-6.png",
  },
  {
    id: 7,
    imageUrl: "/assets/slide-7.png",
  },
  {
    id: 8,
    imageUrl: "/assets/slide-8.png",
  },
  {
    id: 9,
    imageUrl: "/assets/slide-9.png",
  },
  {
    id: 10,
    imageUrl: "/assets/slide-10.png",
  },
  {
    id: 11,
    imageUrl: "/assets/slide-11.png",
  },
  {
    id: 12,
    imageUrl: "/assets/slide-12.png",
  },
  {
    id: 13,
    imageUrl: "/assets/slide-13.png",
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

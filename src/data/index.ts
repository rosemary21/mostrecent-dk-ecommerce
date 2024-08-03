import { ROUTES } from "../routes";
import Category1 from "/assets/category-1.png";
import Category2 from "/assets/category-2.png";
import Category3 from "/assets/category-3.png";
import Category4 from "/assets/category-4.png";

export const dkSuccess = "dkss";
export const dkError = "dker";

export const fashionNavs = [
  {
    id: 1,
    link: ROUTES.fashionMen,
    text: "Men",
    path: "fashion-men",
  },
  {
    id: 2,
    link: ROUTES.fashionWomen,
    text: "Women",
    path: "fashion-women",
  },
  {
    id: 3,
    link: ROUTES.fashionKids,
    text: "Kids",
    path: "fashion-kids",
  },
  {
    id: 4,
    link: ROUTES.allBrands,
    text: "All Brands",
    path: "all-brands",
  },
  // {
  //   id: 5,
  //   link: ROUTES.customise,
  //   text: "Customise",
  //   path: "customise",
  // },
];

export const fashionCategories = [
  {
    id: 1,
    imageUrl: Category1,
    title: "For Women",
    subtitle: "3,495 Products",
    link: ROUTES.fashionWomen,
  },
  {
    id: 2,
    imageUrl: Category2,
    title: "For Men",
    subtitle: "2,847 Products ",
    link: ROUTES.fashionMen,
  },
  {
    id: 3,
    imageUrl: Category3,
    title: "For Kids",
    subtitle: "385 Products",
    link: ROUTES.fashionKids,
  },
  {
    id: 4,
    imageUrl: Category4,
    title: "Accessories",
    subtitle: "2,483 Products",
    link: ROUTES.allBrands,
  },
];

export const ourServices = [
  {
    id: 1,
    icon: "/assets/web-design.svg",
    title: "Branding",
    subtitle:
      "Dkeralutive company to offer branding services so as to render service to its client",
  },
  {
    id: 2,
    icon: "/assets/dev-ops.svg",
    title: "DevOps",
    subtitle:
      "Dkeralutive company to offer devops services so as to render service to its client",
  },
  {
    id: 3,
    icon: "/assets/ui-ux.svg",
    title: "UI/UX",
    subtitle:
      "Dkeralutive company to offer UI/UX services so as to render service to its client",
  },
  {
    id: 4,
    icon: "/assets/frontend-dev.svg",
    title: "Front-End Development",
    subtitle:
      "Dkeralutive company to offer Frontend services so as to render service to its client",
  },
  {
    id: 5,
    icon: "/assets/backend.svg",
    title: "Backend",
    subtitle:
      "Dkeralutive company to offer Backend services so as to render service to its client",
  },
  {
    id: 6,
    icon: "/assets/cms.svg",
    title: "CMS",
    subtitle:
      "Dkeralutive company to offer CMS services so as to render service to its client",
  },
];

export const artCraftNavs = [
  {
    id: 1,
    link: ROUTES.artCraft,
    text: "Home",
    path: "art-craft",
  },
  {
    id: 2,
    link: ROUTES.wallPainting,
    text: "Wall Painting",
    path: "wall-painting",
  },
  {
    id: 3,
    link: ROUTES.handCrafted,
    text: "Hand Crafted",
    path: "hand-crafted",
  },
  // {
  //   id: 4,
  //   link: ROUTES,
  //   text: "All Brands",
  //   path: "all-brands",
  // },
  // {
  //   id: 5,
  //   link: ROUTES.customise,
  //   text: "Customise",
  //   path: "customise",
  // },
];

export const ERRORS = {
  email: "This field must be a valid email",
  required: "This field is required",
  digits: "This field must be digits from 0-9",
};

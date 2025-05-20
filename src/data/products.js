const products = [
  {
    id: "1",
    name: "Lawn Aid Heat Stress Prevention",
    price: 4000,
    image: "/assets/lawn-aid.avif",
    isSubscribable: false,
    applicationStart: "March 1, 2025",
    applicationEnd: "May 1, 2025",
  },
  {
    id: "2",
    name: "Mosquito Deleto (2-Pack)",
    price: 6500,
    image: "/assets/mosquito-deleto-2-pack.avif",
    isSubscribable: true,
    applicationStart: "June 1, 2025",
    applicationEnd: "August 31, 2025",
  },
  {
    id: "3",
    name: "Pet Patch",
    price: 3200,
    image: "/assets/pet-patch.avif",
    isSubscribable: true,
    applicationStart: "July 14, 2025",
    applicationEnd: "August 13, 2025",
  },
  {
    id: "4",
    name: "WonderFert All-Purpose Fertilizer",
    price: 1800,
    image: "/assets/wonderfert-all-purpose.avif",
    isSubscribable: false,
    applicationStart: "September 13, 2025",
    applicationEnd: "October 12, 2025",
  },
  {
    id: "5",
    name: "Fall Fortify",
    price: 1800,
    image: "/assets/fall-fortify.avif",
    isSubscribable: true,
    applicationStart: "October 13, 2025",
    applicationEnd: "November 12, 2025",
  },
  {
    id: "6",
    name: "Drought Defense",
    price: 1800,
    image: "/assets/drought-defense.avif",
    isSubscribable: true,
    applicationStart: "July 1, 2025",
    applicationEnd: "August 31, 2025",
  },
];

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 700);
  });
};

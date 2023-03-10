import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Huetrap Mens Printed Round Neck White T-Shirt (M)",
    brand: "Huetrap",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/b/6/b65ba91HEUT0733_1.jpg",
    price: "399",
    discount: "45",
    category: "men",
    rating: 4.3,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "Huetrap Mens Printed Round Neck Yellow T-Shirt",
    brand: "Huetrap",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/d/e/deb7a91HEUT1330_1.jpg",
    price: "490",
    discount: "32",
    category: "men",
    rating: 3.8,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "The Souled Store Official Rick And Morty- Reality",
    brand: "Rick And Morty",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/c/7c9010d201689_1.jpg",
    price: "399",
    discount: "33",
    category: "men",
    rating: 3.5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "The Souled Store Official Manchester City- Tie Dye",
    brand: "Tie Dye",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8cfc10d201292_1.jpg",
    price: "749",
    discount: "21",
    category: "men & women",
    rating: 5,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "The Souled Store Official Manchester City- Tie Dye",
    brand: "Tie Dye",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8cfc10d201292_1.jpg",
    price: "749",
    discount: "21",
    category: "men & women",
    rating: 5,
    inStock: false,
    fastDelivery: true,
  },
  // {
  //   _id: uuid(),
  //   title: "Twenty Dresses By Nykaa Fashion Show Your Colors",
  //   brand: "Nykaa",
  //   image:
  //     "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/4/e4e9a20LIKAA00001563_.jpg",
  //   price: "449",
  //   discount: "17",
  //   category: "women",
  //   rating: 3.9,
  //   inStock: false,
  //   fastDelivery: true,
  // },
  {
    _id: uuid(),
    title: "Nykaa Fashion Black Satin Solid",
    brand: "Nykaa",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/4/e4e9a20LIKAA00001563_.jpg",
    price: "749",
    discount: "21",
    category: "women",
    rating: 5,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Gajra Gang by Nykaa Fashion Amaira Pink Short",
    brand: "Gajra Gang",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/0/a09282dGAJRA00001383_.jpg",
    price: "990",
    discount: "25",
    category: "women",
    rating: 1.2,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "The Souled Store Batman: Gotham's Saviour",
    brand: "Gotham's",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/6/5/654ec18SS-194958_1.jpg",
    price: "1595",
    discount: "25",
    category: "men",
    rating: 4.8,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Twenty Dresses By Nykaa Fashion Pink The Endless Comfort Shi...",
    brand: "AJMAL",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/c/ec768ecTP1771_1.jpg",
    price: "1250",
    discount: "40",
    category: "women",
    rating: 2.5,
    inStock: false,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "American Eagle Men Blue Super Soft Graphic T-shirt",
    brand: "American Eagle",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/e/ce294bdWEA0175618401_1.jpg",
    price: "749",
    discount: "34",
    category: "men ",
    rating: 5,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Twenty Dresses By Nykaa Fashion Own Your",
    brand: "Nykaa",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/d/0dc3849dr0958_1.jpg",
    price: "499",
    discount: "18",
    category: "women",
    rating: 2.8,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "MIXT by Nykaa Fashion White Shimmer Cowl Neck",
    brand: "MIXT",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/c/ec3325bUS050027_1.jpg",
    price: "599",
    discount: "32",
    category: "women",
    rating: 4,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Likha by Nykaa Fashion Black Chikankari Kurta Pant",
    brand: "Likha",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/9/a92e615twentydrsdrs24374.jpg",
    price: "2250",
    discount: "56",
    category: "women",
    rating: 5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "The Souled Store Official Scooby Doo- Scooby Love",
    brand: "Scooby Doo",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/c/ac1c10d210061_1.jpg",
    price: "500",
    discount: "36",
    category: "men",
    rating: 4.2,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "Twenty Dresses By Nykaa Fashion Flowers On My",
    brand: "Nykaa",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/c/fcdf615twentydrsdrs24485.jpg0",
    price: "3600",
    discount: "65",
    category: "women",
    rating: 4.6,
    inStock: false,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title:
      "The Souled Store Official Marvel Spiderman Logo",
    brand: "Likha",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/8/280c1d6TTSS-184823_1.jpg",
    price: "498",
    discount: "40",
    category: "men",
    rating: 4.2,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title: "Likha by Nykaa Fashion Blue Salwar Suit Set",
    brand: "Likha",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/d/0dd182dLIKHA00001780_.jpg",
    price: "1895",
    discount: "32",
    category: "women",
    rating: 4.5,
    inStock: true,
    fastDelivery: false,
  },
  {
    _id: uuid(),
    title:
      "Bewakoof Mens White Tie & Dye Oversized T-shirt",
    brand: "Bewakoof",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/c/4/c4c0469BF-512813_1.jpg",
    price: "1848",
    discount: "35",
    category: "men & women",
    rating: 4.8,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "Twenty Dresses By Nykaa Fashion Ruffle On My Mind",
    brand: "Nykaa",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/2/a/2ac028bdr0986_1.jpg",
    price: "2000",
    discount: "30",
    category: "women",
    rating: 4.4,
    inStock: true,
    fastDelivery: true,
  },
  {
    _id: uuid(),
    title: "The Souled Store Stranger Things: Go Hawkins",
    brand: "Hawkins",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/b/8b11c18SS-202635_1.jpg",
    price: "249",
    discount: "22",
    category: "men & women",
    rating: 4.2,
    inStock: true,
    fastDelivery: false,
  },
];

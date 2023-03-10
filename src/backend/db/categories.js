import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/1/e1ee6a3SS-202634_1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "women",
    image:
      "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/d/0dd8b7atp1332_1.jpg",
  },
  {
    _id: uuid(),
    categoryName: "men & women",
    image:
      "https://m.media-amazon.com/images/I/416jUZLfZIL.jpg",
  },
];

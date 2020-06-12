import { ICategory } from "./components/Table/model";

const categories: ICategory[] = [
  {
    id: "1",
    name: "معدن ( کوپ )",
    image: "http://digiaminstone.com/images/category/10/logo/1_77268762.jpg",
    slider: [
      {
        index: 1,
        image:
          "http://digiaminstone.com/images/Category/10/slider/1_451be714.jpg",
      },
      {
        index: 2,
        image:
          "http://digiaminstone.com/images/Category/10/slider/1_451be714.jpg",
      },
    ],
  },
  {
    id: "2",
    name: "سنگبری ( انبار سنگ )",
    image: "http://digiaminstone.com/images/category/11/logo/1_226381a8.jpg",
    slider: [
      {
        index: 1,
        image:
          "http://digiaminstone.com/images/Category/11/slider/1_0e6d9598.jpg",
      },
    ],
  },
  {
    id: "3",
    name: "صنایع وابسته",
    image: "http://digiaminstone.com/images/category/12/logo/1_6b6198db.jpg",
    slider: [
      {
        index: 1,
        image:
          "http://digiaminstone.com/images/Category/12/slider/1_95fa91a1.jpg",
      },
    ],
  },
  {
    id: "4",
    name: "ساختمان",
    image: "http://digiaminstone.com/images/category/13/logo/1_1d290edc.jpg",
    slider: [
      {
        index: 1,
        image:
          "http://digiaminstone.com/images/Category/12/slider/1_95fa91a1.jpg",
      },
    ],
  },
];

export function getCategories() {
  return categories;
}

import { ICategory } from "./components/Table/model";

const categories: ICategory[] = [
  {
    id: "1",
    name: "معدن ( کوپ )",
    image: "http://s12.picofile.com/file/8402892876/11.jpg",
    slider: [
      {
        index: 1,
        image:
          "http://s12.picofile.com/file/8402894550/12.jpg",
      },
      {
        index: 2,
        image:
          "http://s12.picofile.com/file/8402896850/13.jpg",
      },
    ],
  },
  {
    id: "2",
    name: "سنگبری ( انبار سنگ )",
    image: "http://s12.picofile.com/file/8402898000/21.jpg",
    slider: [
      {
        index: 1,
        image:
          "http://s13.picofile.com/file/8402901026/22.jpg",
      },
      {
        index: 2,
        image:
            "http://s12.picofile.com/file/8402901134/23.jpg",
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



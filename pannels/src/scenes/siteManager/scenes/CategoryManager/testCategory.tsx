import { ICategory } from "./components/Table/model";

const categories: ICategory[] = [
  {
    id: "1",
    name: "معدن ( کوپ )",
    image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e44bdc53-e7cc-41b4-a9ff-41e8ad3c6430/da1xjed-50df2904-9cca-46a9-9604-654648908ab3.jpg/v1/fill/w_1131,h_707,q_75,strp/coal_mine_by_miguel_santos-da1xjed.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9lNDRiZGM1My1lN2NjLTQxYjQtYTlmZi00MWU4YWQzYzY0MzAvZGExeGplZC01MGRmMjkwNC05Y2NhLTQ2YTktOTYwNC02NTQ2NDg5MDhhYjMuanBnIiwid2lkdGgiOiI8PTExMzEiLCJoZWlnaHQiOiI8PTcwNyJ9XV19.Kxgl6r7CqjGoxx3Xg_S-6Q_j05oN1yHXIlQDGehDpRs",
    slider: [
      {
        index: 1,
        image:
          "https://www.wallpaperup.com/uploads/wallpapers/2014/10/28/497336/64d87a9e3d0392de2bd0f857eb022e3f.jpg",
      },
      {
        index: 2,
        image:
          "https://secureservercdn.net/198.71.233.51/s30.268.myftpupload.com/wp-content/uploads/2020/01/6d7d719267136f5c5078a17d8dd82b31-700_nfdyaj-780x470.jpg",
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



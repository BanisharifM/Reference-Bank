export const categoryUrls = () => {
  const baseCategoryUrl = "/category/";
  return {
    createCategory: baseCategoryUrl,
    deleteCategory: (id: number) => `${baseCategoryUrl}/${id}/`,
    updateCategory: (id: number) => `${baseCategoryUrl}/${id}`,
  };
};

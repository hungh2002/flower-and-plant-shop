import { create } from "zustand";
import { axios } from "../customAxios";

interface ProductsList {
  products: [
    { id: number | null; name: string; price: number; thumbnail: string }
  ];
  update: () => void;
}

const useProductsListStore = create<ProductsList>()((set) => ({
  products: [{ id: null, name: "", price: 0, thumbnail: "" }],

  update: async () => {
    const response = await axios.get("/get-all-products");
    set({ products: response.data });
  },
}));

export default useProductsListStore;

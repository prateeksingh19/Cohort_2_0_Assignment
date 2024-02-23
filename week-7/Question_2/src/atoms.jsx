import { atom, atomFamily } from "recoil";

export const colorFamily = atomFamily({
  key: "colorFamily",
  default: (id) =>
    ({
      0: { id: 0, color: "white" },
      1: { id: 1, color: "red" },
      2: { id: 2, color: "yellow" },
      3: { id: 3, color: "black" },
      4: { id: 4, color: "purple" },
      5: { id: 5, color: "green" },
      6: { id: 6, color: "blue" },
      7: { id: 7, color: "orange" },
    }[id]),
});

import { atom } from "recoil";

export const followerCount = atom({
  key: "followerCount",
  default: 50,
});
export const likeCount = atom({
  key: "likeCount",
  default: 10,
});
export const photoCount = atom({
  key: "photoCount",
  default: 2,
});

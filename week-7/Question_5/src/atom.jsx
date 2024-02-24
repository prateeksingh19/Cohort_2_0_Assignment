import { atom } from "recoil";

export const detailsAtom = atom({
  key: "detailsAtom",
  default: {
    id: "",
    name: "",
    created_at: "",
    followers: "",
    following: "",
    login: "",
    repos_url: "",
    twitter_username: "",
    url: "",
  },
});

export const dataAtom = atom({
  key: "dataAtom",
  default: false,
});

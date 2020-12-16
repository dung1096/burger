import { tang_giam } from "./types/BurgerType";

export const tangGiamAction = (food, bool) => {
  return {
    type: tang_giam,

    food,
    bool,
  };
};

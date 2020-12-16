import { tang_giam } from "../actions/types/BurgerType";

const burgerState = {
  burger: { salad: 1, cheese: 1, beef: 1 },
  menu: {
    salad: 10,
    cheese: 20,
    beef: 50,
  },
  total: 80,
};

const BurgerReducer = (state = burgerState, action) => {
  switch (action.type) {
    case tang_giam: {
      let burgerUpdate = { ...state.burger };

      if (action.bool === 1 && burgerUpdate[action.food] < 5) {
        burgerUpdate[action.food]++;
        //Tính tổng tiền
        state.total += action.bool * state.menu[action.food];
      }
      if (action.bool === -1 && burgerUpdate[action.food] > 0) {
        burgerUpdate[action.food]--;
        //Tính tổng tiền
        state.total += action.bool * state.menu[action.food];
      }

      if (
        burgerUpdate.salad === burgerUpdate.cheese &&
        burgerUpdate.cheese === burgerUpdate.beef &&
        burgerUpdate.beef === 0
      ) {
        alert("Vui lòng chọn nhân!");
        burgerUpdate.salad = 1;
        burgerUpdate.cheese = 1;
        burgerUpdate.beef = 1;
        state.total = 80;
      }
      state.burger = burgerUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
export default BurgerReducer;

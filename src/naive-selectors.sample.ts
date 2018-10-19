const extractUser = (state: State) => state.user;
const extractUserName = (state: State) => extractUser(state).name;

const extractCart = (state: State) => state.cart;
const extractCartItems = (state: State) => extractCart(state).items;

export default function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return {
        ...state,
        loading: true,
        error: false,
        isAuth: false,
      };
    case "success":
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: action.payload,
      };
    case "error":
      return {
        loading: false,
        error: true,
        isAuth: false,
        token: action.payload,
      };
    default:
      return state;
  }
}

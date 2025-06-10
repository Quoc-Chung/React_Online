export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (user, isAdmin) => {
  return {
    type: LOGIN,
    payload: {
      user,
      isAdmin,
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
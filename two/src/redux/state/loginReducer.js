// actions

export const login = (user) => {
  return {
    type: 'login',
    payload: user,
  };
};
export const logout = () => {
  return {
    type: 'logout',
  };
};

// reducer

export const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'login':
      return (state = action.payload);
    case 'logout':
      return (state = null);
    default:
      return state;
  }
};

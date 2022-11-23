const initialState = { name: "Art", age: 28 };

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_USER_NAME": {
            return { ...state, name: action.payload };
        }
        case "CHANGE_USER_AGE": {
            return { ...state, age: action.payload };
        }
        default:
            return state;
    }
};

export default userReducer;
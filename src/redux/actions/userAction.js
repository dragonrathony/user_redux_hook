export const changeUsersName = (name) => {
    return {
        type: "CHANGE_USER_NAME",
        payload: name,
    };
};

export const changeUsersAge = (age) => {
    return {
        type: "CHANGE_USER_AGE",
        payload: age,
    };
};

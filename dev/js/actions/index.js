/**
 * Created by andrey.manaenko on 12.01.2017.
 */
export const selectUser = (user) => {
    console.log("You clicked on user:" + user.first+" "+ user.last );
    return {
        type: "USER_SELECTED",
        payload: user
    }
};
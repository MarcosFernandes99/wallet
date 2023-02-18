export const setAddMoney = (value: number) => {
    return {
        type: "SET_ADD_MONEY",
        payload: value
    }
}

export const setRemoveMoney = (value: number) => {
    return {
        type: "SET_REMOVE_MONEY",
        payload: value
    }
}

export const setTheme = (theme: string) => {
    return {
        type: "SET_THEME",
        payload: theme
    }
}







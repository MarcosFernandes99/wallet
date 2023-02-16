const VALUE_INITIAL_STATE = {
    value: 0
}

const MoneyReducer = (state = VALUE_INITIAL_STATE, action: IAction) => {
    switch (action.type) {
        case "SET_ADD_MONEY":
            return {
                ...state,
                value:  state.value + action.payload
            }
        case "SET_REMOVE_MONEY":
            return {
                ...state,
                value:  state.value - action.payload
            }

        default:
            return state
    }

}

export default MoneyReducer
interface IAction {
    type: string,
    payload: any
}

interface IState {
    wallet?: {
        value: 0
    }
    theme?: {
        theme: string
    }
}

// interface ITheme {
//     theme: string;
// }
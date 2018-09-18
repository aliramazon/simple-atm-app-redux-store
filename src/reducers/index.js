export default (state, action) => {
    switch (action.type) {
        case 'WITHDRAW_MONEY':
            return {
                ...state,
                totalAmount: state.totalAmount - action.payload
            };
        default:
            return state;
    }
}

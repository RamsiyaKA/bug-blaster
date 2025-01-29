export default function TicketReducer(state,action){
    switch (action.type) {
        case "ADD_TICKET":
            return {};
        default:
            return state;
    }
}
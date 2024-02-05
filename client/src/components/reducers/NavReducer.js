const initState=[null,0]
export default function NavReducer(state=initState,action){
    switch(action.type){
        case "Login":
            return "Login";
        case "Registration":
            return "Registration";
        case "Book":
            return "Book";
        case "ShowFlights":
            return "ShowFlights";
            default:
            return "Home";
    }

}
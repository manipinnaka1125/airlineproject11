export default function AuthReducer(state=[null,0],action){
switch(action.type){
    case "login":
       localStorage.setItem("un",action.data.un)
       localStorage.setItem("role",action.data.role)
       return [action.data.un,action.data.role]
    case "logout":
       localStorage.removeItem("un")
       localStorage.removeItem("role")
            return [null,0]
     default:
          return [null,0]
}
}
const INITIAL_STATE ={
    id:null,
    username:'',
    email:'',
    imgProfile:'',
    role:''

}
 export const  authReducer = (state = INITIAL_STATE, action) =>{
    console.log('Data from action',action);
    switch (action.type) {
        case "Login_Success":
            console.log('data dari state:', state);
            console.log("data dari action.payload:", action.payload);
            return{...state, ...action.payload};
        case "LOGOUT":
            return INITIAL_STATE; //mereset ulang reducer    
        default:
            return state;
    }
 }

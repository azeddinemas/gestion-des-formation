
const data = localStorage.getItem('role')
const initialState = data?{login:true,data}:{login:false,data:null}

const authReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                login : true,
                data : action.payload
            }

        case 'LOGIN_FIELD':
            return{
                login:false,
                data : null
            } 

        case 'LOGOUT':
            return {
                ...state,
                login:false,
            }
    
        default:
            return state
    }
} 













export default authReducer








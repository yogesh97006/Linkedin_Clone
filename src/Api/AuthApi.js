import {
    signInWithEmailAndPassword,createUserWithEmailAndPassword,Auth
} from 'firebase/auth'

export const Login=(email,password)=>{
    try{
   let response= signInWithEmailAndPassword(Auth,email,password)
    return response
    }
    catch(err){
        console.log(err)
    }
}

export const SignUp=(email,password)=>{
    try{
         let response=createUserWithEmailAndPassword(Auth,email,password)
            return response
        }
    catch(err){
       console.log(err)
    }
        }
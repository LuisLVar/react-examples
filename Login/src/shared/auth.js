import { users } from "./users";


export const auth = (user, setIsLoading) => {

    const { email, password} = user;
    let response = undefined;
    
    users.forEach( usuario => {
       if(email === usuario.email){
            if(password === usuario.password){
                response = usuario
                return;
            }
       }     
    } );

    return response;
}
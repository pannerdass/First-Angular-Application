import * as firebase from 'firebase';
export class AuthService{

    token:string;
    signUp(email:string,password:string){
firebase.auth().createUserWithEmailAndPassword(email,password).
catch(
  error=>  console.error(error)
    
);
    }

    signIn(email:string,password:string){
       firebase.auth().signInWithEmailAndPassword(email,password).
       then((status)=>
       {
      firebase.auth().currentUser.getIdToken()
      .then((tk:string)=>{
this.token=tk;
//console.log(tk);
      })
      
       // console.log(status)
       }
       )
      
       .catch((error)=>console.log(error));
            
    }

    getToken():string{
        firebase.auth().currentUser.getIdToken()
        .then((tk:string)=>{
  this.token=tk;
  //console.log(tk);
        });
        return this.token;
    }
    isAuthenticated(){
        return this.token !=null;
    }
    logOut(){
        firebase.auth().signOut();
        this.token=null;
    }
}

function verif_formulaire()
{
    
    let vpass= /^(?=.*?[0-9])(?=.*?[A-Z]).{8,}$/
    if( vpass.test(document.form_cont.pass.value) ==false ){
        alert("Le mot de passe doit contenir les chiffres,lettres en miniscules et majuscules"); 
        //return false;
    }
    
    if(document.form_cont.pass.value != document.form_cont.passconf.value){
        alert("Mot de passe different");
        //return false;
    }
    
   let vemail =  /\S+@\S+\.\S+/;
    if(vemail.test(document.form_cont.email.value) == false){
        alert("Ecrire un mot de passe valide");
        //return false;
    }

 if(document.form_cont.lastname.value == "" || document.form_cont.firstname.value == "" || document.form_cont.email.value == "" || document.form_cont.pass.value == "" || document.form_cont.passconf.value=="")  
 {
   alert("Remplissez les champs svp");
   //document.formulaire.lastname.focus();
   return false;
  }
  
 
}
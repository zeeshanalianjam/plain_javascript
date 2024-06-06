const userAtive = true;
const userloggedIn = true;

// if(userAtive){
//     console.log('user is ative');
// }

// if(true){
//     console.log('user logged in');
// }


// > , < , >= , <= , == , === 

const scrore = 200;
const halfCentry = 50
const Centry = 100;
const oneHalfCentry = 100;


// if(scrore < 50){
//     console.log(`Now score is up to ${halfCentry}`);
// } else if(scrore < 100){
//     console.log(`Now score is up to ${Centry}`);
// } else if(scrore < 150){
//     console.log(`Now score is up to ${oneHalfCentry}`);
// }  else if(scrore >= scrore){
//     console.log(`Match is Ended ${scrore}`);
// }



const userAge = 12;
const userCreditCard = true;

if(userAge >= 18 && userCreditCard){
    console.log(`User allowed to buy shopping`);
}else{

    console.log(`Dear user you are anyOne creadientional is Missed!`);
    console.log(`User not allowed`);
    
}

if(userAge >= 18 || userCreditCard){
    console.log(`Dear user you are anyOne creadientional is passed`);
    console.log(`Now you can allowed to buy shopping`);
}

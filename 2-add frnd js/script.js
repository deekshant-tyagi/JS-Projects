let profile = document.querySelector("h5");

let btn = document.querySelector("#add");
let flag=0;


btn.addEventListener("click",function(){
    if(flag==0){
      profile.innerHTML = "Friends"
        profile.style.color = "green"
        btn.innerHTML = "Remove Friend"
        flag=1;
    }
    else{
            profile.innerHTML = "Stranger"
            profile.style.color = "Red"
            btn.innerHTML = "Add Friend"
            flag=0;
    }
})
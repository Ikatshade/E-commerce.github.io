
  let signup = document.getElementById("signup");
  signup.addEventListener("click", (e) => {
    e.preventDefault();

     const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    const confpass = document.getElementById("pass-w").value;
    let userList = JSON.parse(localStorage.getItem('userList') )|| [];
   

    const user = {
      name: name,
      email: email,
      password: password,
    };

    userList.push(user);
    console.log(userList);
    alert("ok done");

    localStorage.setItem("userList", JSON.stringify(userList));
    alert("Data Added Successfully", JSON.stringify(user));

    window.location.replace('/index.html')
  });





// function signIn(e){
//     var email = document.getElementById('email').value
//     var password = document.getElementById('pass').value

//     console.log(email);
//     console.log(password);

// }
//window.onload =function(){ //ensures the page is loaded before functions are executed.
//document.getElementById("form").onsubmit = store
/* document.getElementById("clearButton").onclick = clearStorage
    document.getElementById("removeButton").onclick = removeItem
    document.getElementById("retrieveButton").onclick = retrieveRecords*/
//}

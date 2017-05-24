console.log("Register Script loaded !")

function createUser () {

  // ### CHECK CACHE INTERGRITY ###

  try {
    cache = JSON.parse(localStorage.users)
    if (typeof cache != "object") {
      cache = []
    }
  } catch(error) {
    console.log(error)
    cache = []
  }
  console.log("Cache : -"+cache+"-")

  // ### USER NAME ###

  userName = document.getElementById("Accounts").username.value
  if (userName == "") {
    alert("Nom d'utilisateur vide !")
    return
  }
  for (var i = 0; i < cache.length; i++) {
    console.log(cache[i].Name)
    if (cache[i].Name == userName) {
      alert("Ce nom d'utilisateur est déjà pris !")
      return
    }
  }

  // ### PASSWORD ###

  pass1 = document.getElementById("Accounts").password.value
  pass2 = document.getElementById("Accounts").pPassword.value
  if ( pass1 != pass2) {
    alert("Les mots de passes de correspondent pas !")
    return
  } else {
    if (pass1 == "") {
      alert("Mot de passe vide !")
      return
    } else {
      userPass = pass1
    }
  }

  // ### UUID ###

  UUID = (Math.floor((Math.random() * 99999999))+1)
  for (var i = 0; i < cache.length; i++) {
    while (cache[i].UUID == UUID) {
      console.log("UUID already exists, generated a new one !")
      UUID = (Math.floor((Math.random() * 99999999))+1)
    }
  }

  uD = {
    "Name" : userName,
    "Pass" : userPass,
    "UUID" : UUID,


  }

  // ### UPDATE CACHE ###
  cache.push(uD)
  localStorage.users = JSON.stringify(cache);

  alert("Compte créé !")

  window.location = 'index.html'
}

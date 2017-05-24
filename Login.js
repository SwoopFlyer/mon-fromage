console.log("➡ Index.js loaded !");

function connect () {

  try {
    cache = JSON.parse(localStorage.users)
    if (typeof cache != "object") {
      cache = []
    }
  } catch(error) {
    console.log(error)
    cache = []
  }

  name = document.getElementById('accountForm').username.value
  pass = document.getElementById('accountForm').password.value

  for (var i = 0; i < cache.length; i++) {
    if (cache[i].Name == name && cache[i].Pass == pass) {
      document.getElementById("accountButtons").style = "display:none;"
      alert("Félicitation vous êtes connecté")
    } else {
      alert("Nom d'utilisateur ou votre mot de passe sont incorectes ")
    }
  }
}

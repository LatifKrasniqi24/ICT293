let user = document.querySelector("#user")
let img = document.querySelector("#img")
let name = document.querySelector("#username")

fetch("https://api.lanyard.rest/v1/users/584393278812848151")
.then(r => r.json())
.then(data => {
  let avatar = data["data"]["discord_user"]["avatar"];
  let id = data["data"]["discord_user"]["id"]
  let avatar_link = "https://cdn.discordapp.com/avatars/" + id + "/" + avatar + ".webp"
  img.src = avatar_link  
  console.log(data["data"]["discord_user"])
  username.innerText = data["data"]["discord_user"]["display_name"];
})
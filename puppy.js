//getting the puppys basic info from api

async function fetchPuppyData(){
    try{
        let response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players')
        const fixedNameData = await response.json();
        console.log(fixedNameData.data)
        return fixedNameData.data.players
    }
    catch(error){
        console.error(error)
    }
}

async function renderPuppyData(){
  let puppyContainer = document.getElementById('name-list')
  
  let myPuppies = await fetchPuppyData();
 
  
  for(let i = 0; i < myPuppies.length; i++){
      let justPuppies = myPuppies[i]
  
      let newPuppyElement = document.createElement('p')
      newPuppyElement.innerText = `Name: ${justPuppies.name} ID: ${justPuppies.id}` 
      
      
      newPuppyElement.style.border = "2px solid black";
      const img = document.createElement('img')
      img.src = `${justPuppies.imageURL}`

      let newButton = document.createElement("button")
        newButton.innerText = "Player Bio"
       
        newButton.addEventListener("click", () => {
          
          localStorage.setItem("name", justPuppies.name)
          localStorage.setItem("breed", justPuppies.breed)
          localStorage.setItem("status", justPuppies.status)
          localStorage.setItem("create", justPuppies.createdAt)
          window.location.href = "puppy-details.html"
        })
        
        newPuppyElement.appendChild(img)
          newPuppyElement.appendChild(newButton)
          puppyContainer.appendChild(newPuppyElement)
         
  }}

renderPuppyData();
   
     

     
     
  



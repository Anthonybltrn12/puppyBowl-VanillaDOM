window.onload = () => {
    // SM3-a: We need to access the data that we currently have cached in our localStorage. 
        // Skeleton Syntax to fetch data from localStorage:
            // localStorage.getItem("nameOfTheKeyYouWant")
    let puppyName = localStorage.getItem("name")
    let puppyBreed = localStorage.getItem("breed")
    let puppyStatus = localStorage.getItem("status")
    let puppyDate = localStorage.getItem('create')

    // SM3-b: Make sure you have access to the HTML ingredients we need to "append" these new elements we are about to make. 
    let pupDetailBox = document.getElementById("pup-description-box")

    // SM3-c: Now we want to make new elements to reflect all of the movie data.
        // Title first:
    let newPupName = document.createElement("p")
    newPupName.innerText = `Name:${puppyName}`
    // Don't forget to append this new element to your container
    pupDetailBox.appendChild(newPupName)

    let breedBox = document.createElement("p")
    breedBox.innerText = `Breed: ${puppyBreed}`
    pupDetailBox.appendChild(breedBox)

    let StatusBox = document.createElement('p')
    StatusBox.innerText = `Specialty: ${puppyStatus}`
    pupDetailBox.appendChild(StatusBox)

    let birthBox = document.createElement('p')
    birthBox.innerText =`Birth Time: ${puppyDate}`
    pupDetailBox.appendChild(birthBox)
}
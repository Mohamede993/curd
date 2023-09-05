let prodectNameInput = document.getElementById('proudactName')
let proudactCategoryInput = document.getElementById('proudactCategory')
let proudactPriceInput = document.getElementById('proudactPrice')
let proudactDescriptionInput = document.getElementById('proudactDescription')

let prodectData = []

if (localStorage.getItem('info')!=null) {
    prodectData = JSON.parse (localStorage.getItem('info'))
}


function addProdact() {
    let prodactObj = {
        name: prodectNameInput.value,
        category: proudactCategoryInput.value,
        Price: proudactPriceInput.value,
        Description: proudactDescriptionInput.value,
    }
    prodectData.push(prodactObj)

    localStorage.setItem('info',JSON.stringify(prodectData))


    addInfo()

}


function addInfo() {

    let  prodectInfo= ``
    for (let i = 0; i < prodectData.length; i++) {
        prodectInfo+=`
        <tr>
                    <td class="text-white">${prodectData[i].name}</td>
                    <td class="text-white">${prodectData[i].category}</td>
                    <td class="text-white">${prodectData[i].Price}</td>
                    <td class="text-white">${prodectData[i].Description}</td>
                    <td><button onclick="deleteItem(${i})" class="btn btn-danger btn-sm">Delete</button></td>
                    <td><button onclick="updateItem(${i})" class="btn btn-success btn-sm">Update</button></td>
                </tr>
        `

    }
    document.getElementById('tbody').innerHTML=prodectInfo

}


addInfo()

function deleteItem(Index) {
    prodectData.splice(Index, 1)
    localStorage.setItem('info',JSON.stringify(prodectData))
    addInfo()
}


function updateItem(index) {
    prodectNameInput.value = prodectData[index].name
    proudactCategoryInput.value = prodectData[index].category
    proudactPriceInput.value = prodectData[index].Price
    proudactDescriptionInput.value = prodectData[index].Description
    deleteItem()
    addInfo()

}



function searchItem (){
  let proudactSearch = document.getElementById("proudactSearch").value
  let box = ``
  for(let i = 0; i < prodectData.length ; i++) {
    if (prodectData[i].name.includes(proudactSearch)){
        box+=`
        <tr>
                    <td class="text-white">${prodectData[i].name}</td>
                    <td class="text-white">${prodectData[i].category}</td>
                    <td class="text-white">${prodectData[i].Price}</td>
                    <td class="text-white">${prodectData[i].Description}</td>
                    <td><button onclick="deleteItem(${i})" class="btn btn-danger btn-sm">Delete</button></td>
                    <td><button onclick="updateItem(${i})" class="btn btn-success btn-sm">Update</button></td>
                </tr>
        `
    }
  }
  document.getElementById("tbody").innerHTML=box
}
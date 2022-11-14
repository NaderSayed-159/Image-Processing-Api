const { url } = require("inspector");

async function getImageData (url){
    let fetchedData = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

        return await fetchedData.json()

    }

    
    getImageData('/api/image');


// function checkImageExistance(){

// }
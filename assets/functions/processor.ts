async function getImageData<T>(url: string): Promise<T> {
    const fetchedData = await fetch(url)

    return await fetchedData.json();

}

const something = async ()=>{
    const x = await getImageData('/api/image');
    console.log('x', x)
}

something()


// function checkImageExistance(){

// }
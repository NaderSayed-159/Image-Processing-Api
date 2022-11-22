
const fetchingImages = async (url: string): Promise<[]> => {

    const fetchedData = await fetch(url);
    return await fetchedData.json();
}


document.addEventListener('DOMContentLoaded',async()=>{
    const fetchedData: string[] = await fetchingImages('/api/image/data');
    const imgList: HTMLElement | null = <HTMLElement>document.getElementById('imgNameList');
    fetchedData.forEach((img: string) => {
        imgList.innerHTML += `<option value="${img}">`
    });
})
 


// const showAlert = (messege: string, className: string, container: HTMLElement, showinPlace: HTMLElement) => {
//     const div = document.createElement('div');
//     div.className = `alert alert-${className} m-3`;
//     div.id = `alert`;
//     div.appendChild(document.createTextNode(messege));
//     container.insertBefore(div, showinPlace);
//     setTimeout(() => getElement('alert').remove(),
//         3000);
// }






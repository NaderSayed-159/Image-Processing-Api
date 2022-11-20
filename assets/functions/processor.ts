const fetchingImages = async (url: string): Promise<[]> => {

    const fetchedData = await fetch(url);
    return await fetchedData.json();
}

function getElement(id: string): HTMLElement {
    const el = document.getElementById(id);
    if (el == null) {
        throw new Error(`Element #${id} not found.`);
    }
    return el as HTMLElement;
}

document.addEventListener('DOMContentLoaded', async()=>{
    const fetchedData: string[] = await fetchingImages('/api/image/data');
    console.log('fetchedData', fetchedData)
    const imgList: HTMLElement | null = <HTMLElement> document.getElementById('imgNameList');
    fetchedData.forEach((img: string) => {
        imgList.innerHTML += `<option value="${img}">`
    });
})

const isImgExist = async (imgName: string): Promise<boolean> =>{
    const folderImgs: string[] = await fetchingImages('/api/image/data');
    return folderImgs.includes(imgName)
}
const showAlert = (messege: string, className: string, container: HTMLElement, showinPlace: HTMLElement) => {
    const div = document.createElement('div');
    div.className = `alert alert-${className} m-3`;
    div.id = `alert`;
    div.appendChild(document.createTextNode(messege));
    container.insertBefore(div, showinPlace);
    //make is disappear 
    setTimeout(() => getElement('alert').remove(),
        3000);
}


const resizingForm = <HTMLInputElement>document.getElementById("resizingForm");
const formContainer = <HTMLInputElement>document.getElementById("FormConatiner");

resizingForm.addEventListener('submit' ,async (event)=>{
    const imgName = (<HTMLInputElement>document.getElementById("imageName")).value;
    if (! await isImgExist(imgName)){
        showAlert("Image doesn't Exist", "danger", formContainer, resizingForm)
        event.preventDefault()  
        return false
    }
    return true;
})





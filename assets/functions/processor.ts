export const isImgExist = async (imgName: string, folderImgs: string[]): Promise<boolean> => {
    return  folderImgs.includes(imgName)
}

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



document.addEventListener('DOMContentLoaded',async()=>{
    const fetchedData: string[] = await fetchingImages('/api/image/data');
    const imgList: HTMLElement | null = <HTMLElement>document.getElementById('imgNameList');
    fetchedData.forEach((img: string) => {
        imgList.innerHTML += `<option value="${img}">`
    });
})
 


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

resizingForm.addEventListener('submit', async (event) => {
    const imgName = (<HTMLInputElement>document.getElementById("imageName"));
    const folderImgs = await fetchingImages('/api/image/data');
    const imgInFolder = await isImgExist(imgName.value, folderImgs);
    console.log('imgInFolder', imgInFolder)
    if (! await isImgExist(imgName.value, folderImgs)) {
        showAlert("Image doesn't Exist", "danger", formContainer, resizingForm)
        event.preventDefault()
        return false
    }
    return true;
})





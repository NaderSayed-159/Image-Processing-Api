
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
 



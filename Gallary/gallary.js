const images=[];
let current_index=0;
 
let nxt_btn=document.getElementById("next_btn");
let prev_btn=document.getElementById("previous_btn");
let choose_img=document.getElementById("upload_img");
let currentImage=document.getElementById("img");

function update_img(){
    if(images.length>0){
        currentImage.src=images[current_index];

    } else {
        currentImage.src='';
    }
}
nxt_btn.addEventListener("click",()=>{
    if(current_index < images.length-1){
        current_index++;
        update_img();
    }
    else{
        alert("there is no next image");
    }
});

prev_btn.addEventListener("click",()=>{
    if(current_index>0){
        current_index--;
        update_img();
    }
    else{
        alert("there is no previous img");
    }
});

choose_img.addEventListener("change",(event)=>{
    const files=event.target.files;
    for(let i=0;i<files.length;i++){
        let file=files[i];
        const reader= new FileReader();
        reader.onload=(e)=>{
            images.push(e.target.result);

            if (images.length === 1) {
                current_index= 0;
                update_img();
            }

            if (current_index < images.length - 1) {
                current_index++;
                update_img();
            } 
        }
        reader.readAsDataURL(file);
    }
});
update_img();
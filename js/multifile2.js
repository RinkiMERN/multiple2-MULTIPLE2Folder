
        let input = document.querySelector('input')
        let div = document.querySelector("section")

        input.addEventListener('change',(e)=>{

            let data = e.target.files;

            [...data].forEach((img)=>{
                let dataFormat = new FileReader();

                dataFormat.readAsDataURL(img)

                dataFormat.onload =  function(){
                    let count = localStorage.length

                    localStorage.setItem(`image${count}`,dataFormat.result);
                }


            })
        });

        for(i=0;i<localStorage.length;i++){
            let allImage =  localStorage.getItem(`image${i}`);
            console.log(allImage);
            div.innerHTML += `<img src="${allImage}" />`;
        }
        
let string="";
let buttons=document.querySelectorAll('.butt');
Array.from(buttons).forEach((button)=>{
         button.addEventListener('click',(e)=>{
            if(e.target.innerHTML=='Enter'){
                string= eval(string);
                document.querySelector('input').value=string;
            }
          else if(e.target.innerHTML=='&#8730'){
                string= Math.sqrt(string);
                document.querySelector('input').value=string;
            }

            else if(e.target.innerHTML=='clear'){
                    string="";
                    document.querySelector('input').value=string;
            }
            else if(e.target.innerHTML=='del'){
               string =  string.slice(0, -1);
                document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='ans'){
            string= eval(string);
            document.querySelector('input').value=string;
        }
            else{
                console.log(e.target)
                string=string+e.target.innerHTML;
                document.querySelector('input').value=string;
            }
         });
})
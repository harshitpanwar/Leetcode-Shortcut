document.addEventListener('keydown', (event) => {

    if(event.ctrlKey && event.key==='`'){
        console.log("run code");
        document.querySelector(".runcode__1EDI.css-79pre8").click();
    }
    if(event.ctrlKey && event.key==="Enter"){
        console.log("submit");
        document.querySelector(".submit__2ISl.css-ieo3pr").click();
    }

  }, false);

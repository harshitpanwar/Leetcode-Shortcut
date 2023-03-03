document.addEventListener('keydown', (event) => {

    if(event.ctrlKey && event.key==='`'){
        console.log("run code");
        document.querySelector(".runcode__1EDI.css-79pre8").click();
    }
    if(event.ctrlKey && event.key==="Enter"){
        console.log("submit");
        document.querySelector(".submit__2ISl.css-ieo3pr").click();
    }

    
    // var name = event.key;
    // var code = event.code;
    // if (name === 'Control') {
    //   // Do nothing.
    //   alert("hi");
    //   return;
    // }
    // if (event.ctrlKey) {
    //   console.log(`Combination of ctrlKey + ${name} \n Key code Value: ${code}`);
    // } else {
    //   console.log(`Key pressed ${name} \n Key code Value: ${code}`);
    // }
  }, false);

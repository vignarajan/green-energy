// DATA RESOURCES
let dataResorce = [
    {
        heading: "Wind Energy",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis, mi nec suscipit ultricies, mi arcu varius sem, et luctus orci eros porttitor lorem. Integer fermentum lectus vitae tortor ultricies viverra eu et erat. Etiam vitae porta felis, sit amet venenatis enim. Praesent sagittis commodo tortor at pretium. Duis mauris risus, pulvinar id neque eget, sodales ultrices sem.",
        imgUrl: "./img/wind.jpg"
    },
    {
        heading: "Solar Energy",
        bodyText: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla tempus ullamcorper dignissim. Suspendisse mattis velit id enim fermentum vehicula. Quisque laoreet dolor at ipsum aliquam, id mollis metus aliquam. Suspendisse potenti. Morbi dapibus pretium nulla, vitae maximus massa commodo ut. Suspendisse volutpat vitae orci a ullamcorper.",
        imgUrl: "./img/solar.jpg"
    },
    {
        heading: "Hydro Energy",
        bodyText: "Fusce orci lacus, dapibus in eleifend eget, tincidunt ut erat. Praesent feugiat, velit at aliquam iaculis, tortor odio congue odio, id hendrerit nisl augue ut sem. Nunc sit amet aliquet est. Praesent convallis felis nisi, sit amet lacinia turpis vulputate sit amet. Nullam vel sapien quis arcu semper accumsan sit amet vel ante.",
        imgUrl: "./img/hydro.jpg"
    }
];

let $btns = document.querySelectorAll('button');
let $content = document.querySelector(".content");

 $content.innerHTML = `<h3>${dataResorce[0].heading}</h3>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;

// EVENT-OBJECT IS ACCESSED 
// AS THE FIRST PARAMETER OF THE EVENT-HANDLER 
function eventHandler(ev){
    
    // fetch the clicked button
    let clickedBtn = ev.target;
    
    // read the text inside the button
    let btnText = clickedBtn.innerText;
    
    // print the text of the clicked button
    //console.log(btnText);
    
    if (btnText === "Wind") {
        $content.innerHTML = `<h3>${dataResorce[0].heading}</h3>
                              <img src="${dataResorce[0].imgUrl}" alt="placeholder">
                              <p>${dataResorce[0].bodyText}</p>`;
    } else if (btnText === "Solar") {
        $content.innerHTML = `<h3>${dataResorce[1].heading}</h3>
                                <img src="${dataResorce[1].imgUrl}" alt="placeholder">
                              <p>${dataResorce[1].bodyText}</p>`;
    } else if (btnText === "Hydro") {
        $content.innerHTML = `<h3>${dataResorce[2].heading}</h3>
                                <img src="${dataResorce[2].imgUrl}" alt="placeholder">
                              <p>${dataResorce[2].bodyText}</p>`;

    }
    
}
//$btns[0].addEventListener("click", clickEvent);
//$btns[1].addEventListener("click", clickEvent);
//$btns[2].addEventListener("click", clickEvent);

for(let i=0; i<$btns.length; i++){
    $btns[i].addEventListener("click", eventHandler);
}
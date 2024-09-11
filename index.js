for(var i=0;i<=6;i++){document.querySelectorAll(".drum")[i].addEventListener("click",function(){let btn=this.innerHTML
    press(btn)
    btnAnimation(btn)})}
    document.addEventListener("keypress",function(event){press(event.key)
    btnAnimation(event.key)});function press(key){let crash=new Audio(`sounds/crash.mp3`)
    let kick=new Audio(`sounds/kick-bass.mp3`)
    let snare=new Audio(`sounds/snare.mp3`)
    let tom1=new Audio(`sounds/tom-1.mp3`)
    let tom2=new Audio(`sounds/tom-2.mp3`)
    let tom3=new Audio(`sounds/tom-3.mp3`)
    let tom4=new Audio(`sounds/tom-4.mp3`)
    switch(key){case "w":{crash.play()
    break}
    case "a":{kick.play()
    break}
    case "s":{snare.play()
    break}
    case "d":{tom1.play()
    break}
    case "j":{tom2.play()
    break}
    case "k":{tom3.play()
    break}
    case "l":{tom4.play()
    break}}}
    function btnAnimation(currentbtn){let activebtn=document.querySelector("."+currentbtn)
    activebtn.classList.add("pressed")
    setTimeout(function(){activebtn.classList.remove("pressed")},500)}
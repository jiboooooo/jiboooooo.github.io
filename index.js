window.onload=function(){
    var audio=document.getElementsByTagName('audio')[0]
    // var images=document.getElementsByTagName('img')
    // for ( i=1;i<=images.length;i++) {
    //     var varName="p"+i
    //     window[varName]=images[i-1]
    //     window[varName].onclick=function(){
    //         audio.src="audio/" + i + ".mp3"
    //         audio.play()
    //     }
    // }
    var p1=document.getElementsByTagName('img')[0]
    var p2=document.getElementsByTagName('img')[1]
    var p3=document.getElementsByTagName('img')[2]
    var p4=document.getElementsByTagName('img')[3]
    p1.onclick=function(){
        audio.src='audio/1.mp3'
        audio.play()
    }
    p2.onclick=function(){
        audio.src='audio/2.mp3'
        audio.play()
    } 
    p3.onclick=function(){
        audio.src='audio/3.mp3'
        audio.play()
    }
    p4.onclick=function(){
        audio.src='audio/4.mp3'
        audio.play()
    }
}
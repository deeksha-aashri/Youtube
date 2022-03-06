fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet%20&channelId=UC-9-kyTW8ZkZNDHQJ6FgpwQ%2Fabout&maxResults=20&order=date&key=[AIzaSyABlh_fn0cfxVJXZfeJl_L01LBcFwOvK0I]%20HTTP/1.1")
.then((result)=>{
   return result.json()
}).then((data)=>{
    console.log(data)
    let vidoes=data.items
    let videoContainer= document.querySelector(".songs")
    for(video of videos){
        videoContainer.innerHTML+='
        <img src="${video.snippet.thumbnail.default.url}">
        '
    }
})
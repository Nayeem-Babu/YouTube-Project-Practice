// Please don't expose API Key
 const API_KEY = ""
async function searchYTVidoes() {
    const searchText = document.getElementById('search-text').value
    const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&q=${searchText}&type=video&maxResult-25&videoDuration=long`
   
    try {
        const res = await fetch(API_URL)
        const data = await res.json()
        console.log(data) 
     }  catch(error) {
        console.log(error)
        }  
     }

function displayVideos(data) {
    const videoList = document.getElementById('videos-list')
    videoList.innerHTML = ''

    data.items.forEach((video) => {
        const colDiv = document.createElement('div')
        colDiv.classList.add('col-xl-4', 'col-lg-6', 'col-md-12', 'text-center')

        const iframe = document.createElement('iframe')
        iframe.width = 400
        iframe.height = 225
        const { videoId } = video.id
        iframe.src = "https://www.youtube.com/embed/${videoID}"
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        iframe.setAttribute('allowfullscreen', 'true')

        const iframe = document.createElement('iframe')
        iframe.width = 400
        iframe.height = 225
        iframe.src = "https://www.youtube.com/embed/${videoID}"
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        iframe.setAttribute('allowfullscreen', 'true')

        coldDiv.append(iframe)
        videoList.append(colDiv)

    })
   
}

const badges = document.getElementsByClassName('badge')
('badge')
Array.from(badges).forEach(badge => {
  badge.addEventsListner('click', (event) => {
    removeActiveSelection()
    badge.classList.add('text-bg-light')
    badge.classList.remove('text-bg-dark')
    document.getElementById('search-text').value =badge.innerText
    searchYTVideos()
  })
})

functionremoveActiveSection() {
    Array.from(badges).forEach(badge => {
      badge.classList.remove('text-bg-light')
      badge.classList.add('text-bg-dark')
    })
}  

/*
<div class="col-xl-4 col-lg-6 col-md-12 text-center">
   <iframe width="400" height="225" src="https://www.youtube.com/embed/woH5Kc4c1rw?si=cqPiJwufcIKSRdQO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>>
*/

/*
<div class="col-xl-4 col-lg-6 col-md-12 text-center">
   <iframe width="400" height="225" src="https://www.youtube.com/embed/NG_V6_qWHC8?si=J8VdqHNIdoL2Amkg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>>
*/

/* 
    # Fetch via promise handling
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error))
*/

var users =[
 {
    "name":"Dan Bilzerian",
    "photo":"http://cdn.emgn.com/wp-content/uploads/2015/08/dan-bilzerian-emgn-18.jpg",
    "scores":[
        5
      ]
  },
  {
    "name":"George Clooney",
    "photo":"https://www.telegraph.co.uk/content/dam/films/2016/04/13/clooney_trans_NvBQzQNjv4BqRp36Ti1MFCYr8PMuS2fHb17hoDUspm84EYl8tHPMRlk.jpg?imwidth=450",
    "scores":[
        4
      ]
  },
  {
    "name":"Mad Dog Mattis",
    "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtVvCmsWfX1G57qFxh04_BG3xOcgWnxhWVFdu_Ad046IzoQeV",
    "scores":[
        3
      ]
  },
  {
    "name":"Spiderman",
    "photo":"https://www.zoomflume.com/wp-content/uploads/2017/02/spiderman.jpg",
    "scores":[
        2
      ]
  },
  {
    "name":"Bill Clinton",
    "photo":"https://pbs.twimg.com/profile_images/451207149478096896/HoMUOmyu_400x400.jpeg",
    "scores":[
        1
      ]
  }
]

  
  var pushUser = function (x){
      users.push(x);
  }

  module.exports = {users:users, pushUser:pushUser};
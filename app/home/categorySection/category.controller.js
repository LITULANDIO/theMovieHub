
(function () {
  angular
      .module('app')
      .controller('CategoryHomeController', CategoryHomeController)

  function CategoryHomeController (movieHubFactory) {
    var vm = this

    vm.categoriesOne = [
      {
        name: 'Adventure',
        id: 12,
        poster: 'http://www.supernovarock.cl/wp-content/uploads/2013/03/gi01.jpg'
      },
      {
        name: 'Action',
        id: 28,
        poster: 'http://openbooksociety.com/wp-content/uploads/HLIC/70720c8145c729c1512fd98bfd99323b.jpg'
      },
      {
        name: 'Family',
        id: 10751,
        poster: 'http://assets.nydailynews.com/polopoly_fs/1.5810.1313648894!/img/httpImage/sopranos.jpg'
      },
      {
        name: 'Horror',
        id: 27,
        poster: 'https://s-media-cache-ak0.pinimg.com/736x/30/83/08/3083088424d1ab30945e004a557455b5.jpg'
      }
    ]

    vm.categoriesTwo = [
      {
        name: 'Animation',
        id: 16,
        poster: 'http://www.superprod.net/system/events/images/104/fullscreen/LassieZoe.jpg'
      },
      {
        name: 'Comedy',
        id: 35,
        poster: 'http://www.glamourhunt.com/images/Heyy_baby.jpg'
      },
      {
        name: 'Thriller',
        id: 53,
        poster: 'https://www.moviesky.in/wp-content/uploads/2016/09/Dont-Breathe-2016-English-Movie-350x250.jpg'
      },
      {
        name: 'Romance',
        id: 10749,
        poster: 'http://www.geocities.ws/dirmanirathnam/iruvar1cl.jpg'
      }]

    // generate random num from 1 to 19

    var randomIndex
    vm.imgUrl = 'http://image.tmdb.org/t/p/w500/'
    vm.generateRandom = function () {
      return Math.floor(Math.random() * 20)
    }

    // show random movie image from the three categories below

    movieHubFactory.getNowPlaying()
      .then(function (response) {
        randomIndex = vm.generateRandom()
        vm.imgNowPlaying = vm.imgUrl + response[randomIndex].poster_path
        vm.titleNowPlaying = response[randomIndex].title
        vm.descNowPlaying = response[randomIndex].overview
      })
    movieHubFactory.getPopular()
      .then(function (response) {
        randomIndex = vm.generateRandom()
        vm.imgGetPopular = vm.imgUrl + response[randomIndex].poster_path
        vm.titleGetPopular = response[randomIndex].title
        vm.descGetPopular = response[randomIndex].overview
      })
    movieHubFactory.getTopRated()
      .then(function (response) {
        randomIndex = vm.generateRandom()
        vm.imgTopRated = vm.imgUrl + response[randomIndex].poster_path
        vm.titleTopRated = response[randomIndex].title
        vm.descTopRated = response[randomIndex].overview
      })
  }
})()

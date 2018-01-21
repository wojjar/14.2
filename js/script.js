var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        src:'http://1.fwcdn.pl/po/57/46/95746/7127916.2.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        src:' http://1.fwcdn.pl/po/68/78/6878/6999844.2.jpg'
    },
    {
        id: 3,
        title: 'Platoon',
        desc: 'Film wojenny',
        src:'http://1.fwcdn.pl/po/10/68/1068/7679716.2.jpg'
    },
    {
        id: 4,
        title: 'Star Wars',
        desc: 'Film sci-fi',
        src:'http://1.fwcdn.pl/po/10/49/671049/7790359.2.jpg'
    },
    {
        id: 5,
        title: 'Piła',
        desc: 'Horror',
        src:'http://1.fwcdn.pl/po/14/13/121413/6924617.2.jpg'
    }
];

var moviesElements = movies.map(function(movie) {
    return  React.createElement('li', {key: movie.id},
            React.createElement('h2', {}, movie.title),
            React.createElement('p', {}, movie.desc),
            React.createElement('img',{src:movie.src})
        );
});

var element =
    React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
);

ReactDOM.render(element, document.getElementById('app'));
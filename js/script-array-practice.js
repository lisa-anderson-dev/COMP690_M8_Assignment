//STEP 1

/*
let movies = ['Shrek 2', 'Captain America: The Winter Soldier', 'Forrest Gump', 'Pulp Fiction', 'Megamind'];
console.log(movies[1]);
*/

//STEP 2

/*
let movies = new Array(5);
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
console.log(movies[0]);
*/

//STEP 3

/*
let movies = new Array(5);
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
movies.splice(2, 0, 'The Dark Knight');
console.log(movies.length);
*/

//STEP 4

/*
let movies = [];
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
delete movies[0];
console.log(movies);
*/

//STEP 5

/*
let movies = [];
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
movies[5] = 'The Dark Knight';
movies[6] = 'Once Upon a Time in Hollywood';
for (let element in movies) {
    console.log(movies[element]);
}
*/

//STEP 6

/*
let movies = [];
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
movies[5] = 'The Dark Knight';
movies[6] = 'Once Upon a Time in Hollywood';
for (let movie of movies) {
    console.log(movie);
}
*/

//STEP 7

/*
let movies = [];
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
movies[5] = 'The Dark Knight';
movies[6] = 'Once Upon a Time in Hollywood';
for (let movie of movies.sort()) {
    console.log(movie);
}
*/

//STEP 8

/*
let movies = [];
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
movies[5] = 'The Dark Knight';
movies[6] = 'Once Upon a Time in Hollywood';

let leastFavMovies = [];
leastFavMovies[0] = 'The Thin Red Line';
leastFavMovies[1] = 'The Hitchhiker\'s Guide to the Galaxy';
leastFavMovies[2] = 'The Scarlet Letter';

console.log('Movies I like:');
console.log('');
for (let movie of movies) {
    console.log(movie);
};
console.log('');
console.log('Movies I regret watching:');
console.log('');
for (let movie of leastFavMovies) {
    console.log(movie);
};
*/

//STEP 9

/*
let movies = [];
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
movies[5] = 'The Dark Knight';
movies[6] = 'Once Upon a Time in Hollywood';

let leastFavMovies = [];
leastFavMovies[0] = 'The Thin Red Line';
leastFavMovies[1] = 'The Hitchhiker\'s Guide to the Galaxy';
leastFavMovies[2] = 'The Scarlet Letter';

movies = movies.concat(leastFavMovies);
for (let movie of movies.sort().reverse()) {
    console.log(movie);
}
*/

//STEP 10

/*
let movies = [];
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
movies[5] = 'The Dark Knight';
movies[6] = 'Once Upon a Time in Hollywood';

let leastFavMovies = [];
leastFavMovies[0] = 'The Thin Red Line';
leastFavMovies[1] = 'The Hitchhiker\'s Guide to the Galaxy';
leastFavMovies[2] = 'The Scarlet Letter';

movies = movies.concat(leastFavMovies);
let lastMovie = movies.pop();
console.log(lastMovie);
*/

//STEP 11

/*
let movies = [];
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
movies[5] = 'The Dark Knight';
movies[6] = 'Once Upon a Time in Hollywood';

let leastFavMovies = [];
leastFavMovies[0] = 'The Thin Red Line';
leastFavMovies[1] = 'The Hitchhiker\'s Guide to the Galaxy';
leastFavMovies[2] = 'The Scarlet Letter';

movies = movies.concat(leastFavMovies);
let firstMovie = movies.shift();
console.log(firstMovie);
*/

//STEP 12

/*
let movies = [];
movies[0] = 'Shrek 2';
movies[1] = 'Captain America: The Winter Soldier';
movies[2] = 'Forrest Gump';
movies[3] = 'Pulp Fiction';
movies[4] = 'Megamind';
movies[5] = 'The Dark Knight';
movies[6] = 'Once Upon a Time in Hollywood';

let leastFavMovies = [];
leastFavMovies[0] = 'The Thin Red Line';
leastFavMovies[1] = 'The Hitchhiker\'s Guide to the Galaxy';
leastFavMovies[2] = 'The Scarlet Letter';

movies = movies.concat(leastFavMovies);

let index, leastFavIndices = [];
leastFavMovies.forEach(element => {
    index = movies.indexOf(element);
    if (index > -1) {
        leastFavIndices.push(index);
    }
});

let mostFavMovies = [];
movies.forEach((element, index) => {
    if (leastFavIndices.indexOf(index) === -1) {
        mostFavMovies.push(element);
    }
});
console.log(mostFavMovies);
*/

//STEP 13

/*
let movies = [['Shrek 2', 2], ['Captain America: The Winter Soldier', 1], ['Forrest Gump', 4], ['Pulp Fiction', 5], ['Megamind', 3]];
let movieNames = movies.map(movie => movie.filter(element => typeof element === 'string'));
console.log(movieNames);
*/

//STEP 14

/*
let employees = [];
employees[0] = 'ZAK';
employees[1] = 'JESSICA';
employees[2] = 'MARK';
employees[3] = 'FRED';
employees[4] = 'SALLY';

const showEmployee = empList => {
    console.log('Employees:');
    console.log('');
    for (let emp of empList) {
        console.log(emp);
    }
};
showEmployee(employees);
*/

//STEP 15

/*
const filterValues = valuesList => valuesList.filter(element => element);
console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
*/

//STEP 16

/*
let getRandomElement = valuesList => {
    const listLength = valuesList.length;
    if (listLength === 0) {
        return null;
    } else {
        const randomIndex = Math.floor(Math.random() * listLength);
        return valuesList[randomIndex];
    }
}
console.log(getRandomElement(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']));
*/

//STEP 17

/*
let getMax = (valuesList) => {
    const listLength = valuesList.length;
    if (listLength == 0) {
        return null;
    } else {
        let maxValue = valuesList[0];
        for (let i = 1; i < listLength; i++) {
            maxValue = valuesList[i] > maxValue ? valuesList[i] : maxValue;
        }
        return maxValue;
    }
}
console.log(getMax([1969, 2008, 1975, 1944, 2015, 2010, 2022, 1972, 1948, 1978]));
*/

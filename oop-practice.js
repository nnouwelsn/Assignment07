/* es-lint env browser */

//STEP 1

/*function Cat(){
    }

var Dog = function (){
    }

//STEP 2

var tabby = new Cat();
var chihuahua = new Dog();*/

// STEP 3

/*function Animal(species) {
	this.species = species;
}

Animal.species = function() {
	window.alert('The animal has been created.');
}

Animal.species();*/

//STEP 4

/*function Animal(species) {
	
    this.species = species,
    
    window.alert(this.species)
}

var zebra = new Animal('Zebra');*/

//STEP 5

/*function Animal(type, breed, color, height, length) {
        this.type = type;
        this.breed = breed;
        this.color = color;
        this.height = height;
        this.length = length;
    }

alert(Animal.type = 'Horse');
alert(Animal.type = 'Quater Horse');
alert(Animal.type = 'Multi');
alert(Animal.type = '15 Hands');
alert(Animal.type = '62 inches');*/

//STEP 6

/*
function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length; 

    }


var horse = new Animal('Horse', 'Quater Horse', 'multi', '15 hands', '62 inches');

var arr = Object.values(horse);

var array = [];

array.push(arr);

var list = function () {
    for (var i = 0; i < array.length; i++) {
        var listItems = array[i];
    }
    console.log(listItems.join('\n'));
};


list(); */

//STEP 7

/*function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length
}

Animal.prototype.Speak = function () {
    if (this.type === 'Horse') {
        window.console.log('The horse neighs');
    } else if (this.type === 'Cat') {
        window.console.log('The cat meows')
    } else if (this.type === 'Dog') {
        window.console.log('The dog barks')
    }
}

var horse = new Animal('Horse', 'Quater Horse', 'multi', '15 hands', '62 inches');

horse.Speak();*/

//STEP 8

/*function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;

    var checkType = function () {
        if (this.type === 'Dog') {
            return 'Dog';
        } else if (this.type === 'Cat') {
            return 'Cat';
        } else if (this.type === 'Horse') {
            return 'Horse';
        }
        console.log('The ' + type + ' made a noise!');
    }

    this.Speak = function () {
        checkType();
    }
}

var horse = new Animal('Horse', 'Quater Horse', 'multi', '15 hands', '62 inches')
horse.Speak();*/

//STEP 9

String.prototype.findWords = function() {
    
    var findWords = "";
    findWords.search();
    
}

var rose = ('The rose is a rose, And was always a rose. But the theory now goes That the apple’s a rose, And the pear is, and so’s The plum, I suppose. The dear only knows What will next prove a rose. You, of course, are a rose –But were always a rose.')

window.console.log(rose.findWords('rose'));
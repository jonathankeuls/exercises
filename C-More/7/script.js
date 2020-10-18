// Min version:

// function helloNames(names) {
//     names = ['Klas', 'Filip', 'Maja']
//     return 'Hello ' + names.join(' Hello ')
//  }



function greet(name) {
    console.log('Hello there ' + name + '!')
}

function greetAll(names) {
names.forEach(greet)
}

const persons = ['Klas', 'Filip', 'Maja']

greetAll(persons)

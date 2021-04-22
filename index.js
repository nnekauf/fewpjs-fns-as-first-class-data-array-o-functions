
function wakeDog(dogName, dogBreed) {
    let string = `Wake ${dogName} the ${dogBreed}`
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return string
  }

  function leashDog(dogName, dogBreed) {
    let string = `Leash ${dogName} the ${dogBreed}`
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return string
  }

  function walkToPark(dogName, dogBreed) {
    let string = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return string
  }

  function throwFrisbee(dogName, dogBreed) {
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return string
  }

  function walkHome(dogName, dogBreed) {
    let string = `Walk home with ${dogName} the ${dogBreed}`
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return string
  }

  function unleashDog(dogName, dogBreed) {
    let string = `Unleash ${dogName} the ${dogBreed}`
    console.log(`Unleash ${dogName} the ${dogBreed}`); 
    return string
  }
  
  
  const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

function exerciseDog(dogName, dogBreed) {
    let i = 0
   let a = []
    while (routine[i]){
        a.push(routine[i](dogName, dogBreed));
        i++
    }
    return a
  }
  
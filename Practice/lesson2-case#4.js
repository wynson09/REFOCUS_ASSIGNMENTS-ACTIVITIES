function startAnAcquarium(numFish){
    
        console.log('There are '+ numFish + '🐟 in the aquarium');
        function addFish(){
            numFish++
            console.log('One 🐟 added. Now, we have '+ numFish + ' in the aquarium')
        }
        return addFish;
}
const aquarium = startAnAcquarium(25);
aquarium()
aquarium()

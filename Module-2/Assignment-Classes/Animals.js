class Animals {
    AnimalsName = ['Cat', 'Dog', 'Bird', 'Tiger'];
    AnimalsSound = ['Meow!', 'Arf!', 'Tweet!', 'Rawr!'];
    constructor () {
    }
    AnimalsSpeak () {
        for (let i = 0; i < this.AnimalsName.length; i++){
            console.log(this.AnimalsSound[i] + ' I am a ' + this.AnimalsName[i] + '.');
        }
    }
    Notification() {
        for (let i = 0; i < this.AnimalsName.length; i++){
            console.log(this.AnimalsName[i] + ' is currently eating . . .');
        }
    }
}
const pet = new Animals();
pet.AnimalsSpeak();
pet.Notification();
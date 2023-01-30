var Oxygen = 90;

function pulseOximeter(Oxygen){
    if (Oxygen >= 96) {
        console.log('Normal reading');
    }
    else if (Oxygen === 95) {
        console.log('Acceptable to continue home monitoring');
    }
    else if ((Oxygen === 94) || (Oxygen === 93)) {
        console.log('Seek advice from health professionals');
    }
    else if (Oxygen <= 92) {
        console.log('Seek urgent medical advice');
    }
    else{
        console.log(`The oxygen is undertermined. Please try again`);
    }
}
pulseOximeter(Oxygen);

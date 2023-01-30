var Pulse = 98;

function pulseOximeter(Pulse){
    if ((Pulse >= 40) && (Pulse <= 100)) {
        console.log('Normal reading');
    }
    else if ((Pulse >= 101) && (Pulse <= 109)) {
        console.log('Acceptable to continue home monitoring');
    }
    else if ((Pulse >= 110) && (Pulse <= 130)) {
        console.log('Seek advice from health professionals');
    }
    else if (Pulse >= 131) {
        console.log('Seek urgent medical advice');
    }
    else{
        console.log(`The pulse is undertermined. Please try again`);
    }
}
pulseOximeter(Pulse);
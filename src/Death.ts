import { Person } from './person'
import { NumOfPeople } from './constants'
import { peoples } from './variable'

function plusDeadRate() {
    for (let i = 0; i < peoples.length; i++) {
        const p = peoples[i];
        if (p.color == 'red') {
            p.fatalityRate++;
            Fper(p, p.fatalityRate);
        }
    }
}

function Fper(p: Person, per: number) {
    let rand = Math.random();
    let num = per / 100;
    if (rand <= num) {
        p.death();
        NumOfPeople.Infectious--;
        NumOfPeople.deadPer++;
    }
}

export { plusDeadRate }
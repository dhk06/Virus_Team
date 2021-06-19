import { NumOfPeople } from './constants'

const P_show = document.querySelector<HTMLButtonElement>('#P_show');
const I_show = document.querySelector<HTMLButtonElement>('#I_show');
const S_show = document.querySelector<HTMLButtonElement>('#S_show');

function numPshow(){
    P_show.innerHTML = `${NumOfPeople.wholePer}`;
    I_show.innerHTML = `${NumOfPeople.Infectious}`;
}

export{ numPshow }
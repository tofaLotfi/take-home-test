import fs from 'fs';
import { Drug } from './drug';
import { Pharmacy } from './pharmacy';

const drugs = [
  new Drug('Doliprane', 20, 30),
  new Drug('Herbal Tea', 10, 5),
  new Drug('Fervex', 5, 40),
  new Drug('Magic Pill', 15, 40),
  new Drug('Dafalgan', 10, 5),
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile('output.txt', log.toString(), err => {
  if (err) {
    console.log('error');
  } else {
    console.log('success');
  }
});
/* eslint-enable no-console */
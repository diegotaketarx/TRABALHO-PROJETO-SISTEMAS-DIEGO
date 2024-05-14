import Reitoria from './Reitoria';

const reitoria1 = Reitoria.getInstance("Prof. João Silva");
const reitoria2 = Reitoria.getInstance("Prof. Maria Santos");

console.log(reitoria1 === reitoria2);

console.log(reitoria1.getReitor()); 
console.log(reitoria2.getReitor()); 

reitoria2.setReitor("Prof. Carlos Oliveira");
console.log(reitoria1.getReitor()); 
console.log(reitoria2.getReitor()); 
const CursoBase = require('./Curso');
const CursoComplementarDecorator = require('./CursoComplementarDecorator');

const cursoBase = new CursoBase();

const cursoComplementar = new CursoComplementarDecorator(cursoBase);

console.log(cursoComplementar.detalhes()); // Saída: "Curso Complementar"
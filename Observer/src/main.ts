import { Curso } from './Curso';
import Aluno from './Aluno';

const curso = new Curso();

const aluno1 = new Aluno("João");
const aluno2 = new Aluno("Maria");
const aluno3 = new Aluno("Carlos");

curso.adicionarObservador(aluno1);
curso.adicionarObservador(aluno2);
curso.adicionarObservador(aluno3);

curso.novaInformacao();
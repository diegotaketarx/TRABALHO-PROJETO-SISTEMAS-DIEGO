import { Observador } from './Curso';

class Aluno implements Observador {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    public atualizar(): void {
        console.log(`${this.nome}: Recebi uma notificação sobre o curso!`);
    }
}

export default Aluno;
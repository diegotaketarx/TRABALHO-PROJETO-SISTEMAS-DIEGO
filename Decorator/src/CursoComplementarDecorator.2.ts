class CursoComplementarDecorator {
    constructor(curso) {
        this.curso = curso;
    }

    detalhes() {
        return this.curso.detalhes() + " Complementar";
    }
}

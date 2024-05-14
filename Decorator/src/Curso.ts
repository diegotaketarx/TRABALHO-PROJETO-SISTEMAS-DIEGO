interface Curso {
    detalhes(): string;
}

class CursoBase implements Curso {
    public detalhes(): string {
        return "Curso";
    }
}

module.exports = CursoBase;
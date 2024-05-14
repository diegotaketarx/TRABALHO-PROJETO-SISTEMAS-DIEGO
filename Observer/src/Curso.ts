interface Observador {
    atualizar(): void;
}

class Curso {
    private observadores: Observador[] = [];

    public adicionarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    public removerObservador(observador: Observador): void {
        const index = this.observadores.indexOf(observador);
        if (index !== -1) {
            this.observadores.splice(index, 1);
        }
    }

    public notificarObservadores(): void {
        for (const observador of this.observadores) {
            observador.atualizar();
        }
    }

    // Método para simular uma nova informação ou evento no curso
    public novaInformacao(): void {
        console.log("Nova informação disponível no curso!");
        this.notificarObservadores();
    }
}

export { Curso, Observador };
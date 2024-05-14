class Reitoria {
    private static instance: Reitoria;
    private reitor: string;

    private constructor(reitor: string) {
        this.reitor = reitor;
        // Outras inicializações aqui
    }

    public static getInstance(reitor: string): Reitoria {
        if (!Reitoria.instance) {
            Reitoria.instance = new Reitoria(reitor);
        }
        return Reitoria.instance;
    }

    public getReitor(): string {
        return this.reitor;
    }

    public setReitor(reitor: string): void {
        this.reitor = reitor;
    }

    // Outros métodos e propriedades da classe Reitoria aqui
}

export default Reitoria;
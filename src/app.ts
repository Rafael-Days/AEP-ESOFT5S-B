import express from 'express';
import { openDb } from './database';
import { routes } from './routes';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleware();
        this.database();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
    }

    private async database(): Promise<void> {
        try {
            const db = await openDb();
            await db.exec(`
                CREATE TABLE IF NOT EXISTS Paciente (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nomePaciente TEXT,
                    idade INTEGER
                );
                CREATE TABLE IF NOT EXISTS Consulta (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    tipoConsulta TEXT,
                    pacienteId INTEGER,
                    medico TEXT,
                    dataHora TEXT,
                    descricao TEXT,
                    FOREIGN KEY (pacienteId) REFERENCES Paciente(id)
                );
            `);
            console.log('Conectado ao banco de dados SQLite');
        } catch (error) {
            console.error('Erro ao conectar ao banco de dados:', error);
        }
    }

    private routes(): void {
        this.express.use(routes);
    }
}

export default new App().express;

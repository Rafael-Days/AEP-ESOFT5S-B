import { openDb } from '../../database';
import { PacienteType } from '../types/paciente.type';

class PacienteService {
    async create(paciente: PacienteType) {
        const db = await openDb();
        const result = await db.run(
            'INSERT INTO Paciente (nomePaciente, idade) VALUES (?, ?)',
            paciente.nomePaciente, paciente.idade
        );
        return { id: result.lastID, ...paciente };
    }
    async findAll() {
        const db = await openDb();
        return db.all('SELECT * FROM Paciente');
    }

    async findById(id: number) {
        const db = await openDb();
        return db.get('SELECT * FROM Paciente WHERE id = ?', id);
    }

    async update(id: number, paciente: PacienteType) {
        const db = await openDb();
        await db.run(
            'UPDATE Paciente SET nomePaciente = ?, idade = ? WHERE id = ?',
            paciente.nomePaciente, paciente.idade, id
        );
        return { id, ...paciente };
    }

    async delete(id: number) {
        const db = await openDb();
        await db.run('DELETE FROM Paciente WHERE id = ?', id);
        return 'Paciente removido com sucesso';
    }
}

export default new PacienteService();

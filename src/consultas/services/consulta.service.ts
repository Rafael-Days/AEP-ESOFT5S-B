import { openDb } from '../../database';
import { consultaType } from '../types/consulta.type';

class ConsultaService {
    async create(consulta: consultaType) {
        const db = await openDb();
        const result = await db.run(
            'INSERT INTO Consulta (tipoConsulta, pacienteId, medico, dataHora, descricao) VALUES (?, ?, ?, ?, ?)',
            consulta.tipoConsulta, consulta.pacienteId, consulta.medico, consulta.dataHora, consulta.descricao
        );
        return { id: result.lastID, ...consulta };
    }

    async findAll() {
        const db = await openDb();
        return db.all('SELECT * FROM Consulta');
    }

    async findById(id: number) {
        const db = await openDb();
        return db.get('SELECT * FROM Consulta WHERE id = ?', id);
    }

    async update(id: number, consulta: consultaType) {
        const db = await openDb();
        await db.run(
            'UPDATE Consulta SET tipoConsulta = ?, pacienteId = ?, medico = ?, dataHora = ?, descricao = ? WHERE id = ?',
            consulta.tipoConsulta, consulta.pacienteId, consulta.medico, consulta.dataHora, consulta.descricao, id
        );
        return { id, ...consulta };
    }

    async delete(id: number) {
        const db = await openDb();
        await db.run('DELETE FROM Consulta WHERE id = ?', id);
        return 'Consulta removida com sucesso';
    }
}

export default new ConsultaService();

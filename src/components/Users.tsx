import type { User } from '../types/user';

import { getUsers } from '../services/useUser';
import { useEffect, useState } from 'react';

export function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState('');
    const [cidadeSearch, setCidadeSearch] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const cidades = [...new Set(users.map((user) => user.address.city))];

    const filteredUsers = users.filter((user) => {
        // Busca por texto
        const matchName = user.name.toLowerCase().includes(search.toLowerCase());
        const matchUsername = user.username.toLowerCase().includes(search.toLowerCase());
        const matchEmail = user.email.toLowerCase().includes(search.toLowerCase());

        // Busca por cidade
        const matchCidade = cidadeSearch === '' || user.address.city === cidadeSearch;

        return (matchName || matchUsername || matchEmail) && matchCidade;
    });

    useEffect(() => {
        const loadUsers = async () => {
            setLoading(true);
            try {
                const response = await getUsers();

                setUsers(response);
            } catch (error) {
                console.error('Error fetching users:', error);

                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        loadUsers();
    }, []);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section>
            <h1>API Users</h1>
            <div className="filters">
                <h3>Filtros:</h3>
                <input
                    type="text"
                    placeholder="Procure um usuário..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select value={cidadeSearch} onChange={(e) => setCidadeSearch(e.target.value)}>
                    <option value="">Todas as cidades</option>
                    {cidades.map((cidade) => (
                        <option key={cidade} value={cidade}>
                            {cidade}
                        </option>
                    ))}
                </select>
            </div>
            {filteredUsers.length === 0 ? (
                <p>Nenhum usuário encontrado</p>
            ) : (
                <>
                    <p className="results">
                        {filteredUsers.length}
                        {filteredUsers.length > 1 ? ' usuários encontrados' : ' usuário encontrado'}
                    </p>
                    <div className="list-users">
                        {filteredUsers.map((user) => (
                            <div className="card-user" key={user.id}>
                                <p>
                                    <strong>Nome:</strong> {user.name}
                                </p>
                                <p>
                                    <strong>Username:</strong> {user.username}
                                </p>
                                <p>
                                    <strong>E-mail:</strong> {user.email}
                                </p>
                                <p>
                                    <strong>Cidade:</strong> {user.address.city}
                                </p>
                                <p>
                                    <strong>Empresa:</strong> {user.company.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
}

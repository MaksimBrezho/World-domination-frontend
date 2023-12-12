import React, { useState } from 'react';

const TeamPage = () => {
    const [teams] = useState([
        {
            name: 'Плутон',
            units: ['Харон', 'Никта', 'Стикс', 'Кербер'],
            development: ['78%', '65%', '34%', '0%'],
            shields: ['Есть', 'Нет', 'Нет', 'Нет']
        },
        // Другие команды...
    ]);

    const [teamData] = useState({
        nuclearTechnology: 'Есть',
        bombCount: 2,
        ecologyLevel: '68%',
        budget: 732,
        sanctions: ['Венера', 'Уран']
    });
    const [activeButton, setActiveButton] = useState({ team: null, index: null });
    const [bombCount, setBombCount] = useState(2);;

    const handleBuildShield = (teamName, unit) => {
        console.log(`Building shield for unit ${unit} in team ${teamName}`);
    };

    const handleGiveOrder = () => {
        console.log('Give order');
    };

    const handleInvestInDevelopment = (teamName, unit) => {
        console.log(`Investing in development for unit ${unit} in team ${teamName}`);
    };

    const handleProduceBombs = () => {
        console.log(`Producing ${bombCount} bombs`);
    };

    const handleShootSatellite = (satellite) => {
        console.log(`Shooting at satellite: ${satellite}`);
    };

    return (
        <div>
            <h2>Раунд 5</h2>

            {teams.map((team, index) => (
                <div key={index} className="team-table">
                    <h3>{team.name}</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Юнит</th>
                            <th>Развитие</th>
                            <th>Щит</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {team.units.map((unit, index) => (
                            <tr key={index}>
                                <td style={team.development[index] === '0%' ? { backgroundColor: 'red', color: 'white' } : {}}>{unit}</td>
                                <td style={team.development[index] === '0%' ? { backgroundColor: 'red', color: 'white' } : {}}>{team.development[index]}</td>
                                <td style={team.shields[index] === 'Есть' ? { backgroundColor: 'lightblue' } : {}}>{team.shields[index]}</td>
                                <td>
                                    <button
                                        className={`rounded-button ${activeButton === `${team.name}-${index}` ? 'active' : ''}`}
                                        onClick={() => setActiveButton(`${team.name}-${index}`)}
                                        disabled={team.shields[index] === 'Есть' || team.development[index] === '0%'}
                                    >
                                        Построить щит
                                    </button>
                                    <button
                                        className={`rounded-button ${activeButton === `${team.name}-${index}` ? 'active' : ''}`}
                                        onClick={() => setActiveButton(`${team.name}-${index}`)}
                                        disabled={team.development[index] === '0%'}
                                    >
                                        Вложиться в развитие
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            ))}

            <div className="team-data">
                <h3>Дополнительные данные</h3>
                <table>
                    <tbody>
                    <tr>
                        <td>Ядерная технология:</td>
                        <td>Есть</td>
                        <td>
                            <button className="rounded-button" disabled>
                                Разработать
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Количество бомб:</td>
                        <td>
                            <div className="bomb-count">
                                {bombCount}
                                <input type="number" value={bombCount} onChange={(e) => setBombCount(Number(e.target.value))} style={{ width: '60px' }} />
                            </div>
                        </td>
                        <td>
                            <button className="rounded-button" onClick={handleProduceBombs}>
                                Произвести
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Уровень экологии:</td>
                        <td>68%</td>
                        <td>
                            <button className="rounded-button" onClick={() => console.log('Investing in ecology')}>
                                Вложиться
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Бюджет:</td>
                        <td>732</td>
                    </tr>
                    <tr>
                        <td>Санкции:</td>
                        <td colSpan="2">Венера, Уран</td>
                    </tr>
                    </tbody>
                </table>
                <h3>Соперники</h3>
                <table className="team-table">
                    <thead>
                    <tr>
                        <th>Команда</th>
                        <th>Спутники</th>
                        <th>Статус</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Уран</td>
                        <td>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>Ариэль</li>
                                <li>Умбриэль</li>
                                <li>Титания</li>
                                <li>Оберон</li>
                            </ul>
                        </td>
                        <td>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>Разрушен</li>
                                <li>Жив</li>
                                <li>Жив</li>
                                <li>Жив</li>
                            </ul>
                        </td>
                        <td>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Уран' && activeButton.index === 0 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Ариэль')}
                                        disabled
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Уран' && activeButton.index === 1 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Умбриэль')}
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Уран' && activeButton.index === 2 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Титания')}
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Уран' && activeButton.index === 3 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Оберон')}
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Юпитер</td>
                        <td>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>Ио</li>
                                <li>Европа</li>
                                <li>Ганимед</li>
                                <li>Каллисто</li>
                            </ul>
                        </td>
                        <td>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>Жив</li>
                                <li>Жив</li>
                                <li>Жив</li>
                                <li>Жив</li>
                            </ul>
                        </td>
                        <td>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Юпитер' && activeButton.index === 0 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Ио')}
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Юпитер' && activeButton.index === 1 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Европа')}
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Юпитер' && activeButton.index === 2 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Ганимед')}
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Юпитер' && activeButton.index === 3 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Каллисто')}
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>Сатурн</td>
                        <td>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>Мимас</li>
                                <li>Энцелад</li>
                                <li>Тефия</li>
                                <li>Диона</li>
                            </ul>
                        </td>
                        <td>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>Жив</li>
                                <li>Разрушен</li>
                                <li>Разрушен</li>
                                <li>Жив</li>
                            </ul>
                        </td>
                        <td>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Сатурн' && activeButton.index === 0 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Мимас')}
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Сатурн' && activeButton.index === 1 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Энцелад')}
                                        disabled
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Сатурн' && activeButton.index === 2 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Тефия')}
                                        disabled
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={`rounded-button${activeButton.team === 'Сатурн' && activeButton.index === 3 ? ' active' : ''}`}
                                        onClick={() => handleShootSatellite('Диона')}
                                    >
                                        Выстрелить
                                    </button>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <div className="order-button-container">
                    <button className="order-button" onClick={handleGiveOrder}>
                        Отдать приказ
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TeamPage;

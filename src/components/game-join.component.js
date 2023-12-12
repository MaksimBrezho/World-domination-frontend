import React, { Component } from "react";
import GameDataService from "../services/game.service";
import { withRouter } from '../common/with-router';
class GameDetails extends Component {
    constructor(props) {
        super(props);
        this.getGameDetails = this.getGameDetails.bind(this)
        this.state = {
            teams: [],
        };
    }

    componentDidMount() {

        this.getGameDetails(this.props.router.params.id);
    }

    getGameDetails(gameId) {
        GameDataService.getJoinGame(gameId)
            .then((response) => {
                this.setState({
                    teams: response.data.teams,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { teams } = this.state;

        return (
            <div>
                <h4>Game Details</h4>

                {teams.length === 0 ? (
                    <p>Loading...</p>
                ) : (
                    <table className="game-details-table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Captain</th>
                            <th>Players</th>
                        </tr>
                        </thead>
                        <tbody>
                        {teams.map((team, index) => (
                            <tr key={index}>
                                <td>{team.name}</td>
                                <td>{team.captain}</td>
                                <td>
                                    {team.players.map((player, index) => (
                                        <span key={index}>{player}</span>
                                    ))}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

export default GameDetails;

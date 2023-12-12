import React, { Component } from "react";
import GameDataService from "../services/game.service";

export default class GamesList extends Component {
    constructor(props) {
        super(props);
        this.retrieveGames = this.retrieveGames.bind(this);

        this.state = {
            games: [],
            loading: true,
        };
    }
    componentDidMount() {
        this.retrieveGames();
    }
    retrieveGames() {
        GameDataService.getAll()
            .then((response) => {
                this.setState({
                    games: response.data,
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const { games, loading } = this.state;

        return (
            <div className="games-list">
                <h4>Games List</h4>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <table className="games-table">
                        <thead>
                        <tr>
                            <th className="title-column">Title</th>
                            <th className="teams-column">Number of Teams</th>
                        </tr>
                        </thead>
                        <tbody>
                        {games.map((game, index) => (
                            <tr key={index} className="table-row">
                                <td className="title-column">{game.title}</td>
                                <td className="teams-column">{game.numTeams}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        );
    }
}

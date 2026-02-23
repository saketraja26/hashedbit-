function IPLTable() {
    var [teams, setTeams] = React.useState([]);

    React.useEffect(function() {
        fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                // Sort by NRR in ascending order
                var sortedData = data.sort(function(a, b) {
                    return a.NRR - b.NRR;
                });
                setTeams(sortedData);
            });
    }, []);

    return (
        <div>
            <h1>IPL 2022 Points Table</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Team</th>
                        <th>Matches</th>
                        <th>Won</th>
                        <th>Lost</th>
                        <th>Tied</th>
                        <th>NRR</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(function(team, index) {
                        return (
                            <tr key={index}>
                                <td>{team.No}</td>
                                <td>{team.Team}</td>
                                <td>{team.Matches}</td>
                                <td>{team.Won}</td>
                                <td>{team.Lost}</td>
                                <td>{team.Tied}</td>
                                <td>{team.NRR}</td>
                                <td>{team.Points}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IPLTable />);

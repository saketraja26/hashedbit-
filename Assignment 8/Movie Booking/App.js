function MovieBooking() {
    var [page, setPage] = React.useState(1);
    var [selectedMovie, setSelectedMovie] = React.useState(null);
    var [name, setName] = React.useState('');
    var [email, setEmail] = React.useState('');
    var [mobile, setMobile] = React.useState('');
    var [bookingId, setBookingId] = React.useState('');

    var movies = [
        { id: 1, title: 'Avatar', image: 'https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg' },
        { id: 2, title: 'Avengers', image: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg' },
        { id: 3, title: 'Titanic', image: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg' },
        { id: 4, title: 'Inception', image: 'https://image.tmdb.org/t/p/w500/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg' },
        { id: 5, title: 'The Dark Knight', image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
        { id: 6, title: 'Interstellar', image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg' },
        { id: 7, title: 'Spider-Man', image: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg' },
        { id: 8, title: 'Joker', image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg' }
    ];

    function selectMovie(movie) {
        setSelectedMovie(movie);
        setPage(2);
    }

    function goToBookingForm() {
        setPage(3);
    }

    function submitForm(e) {
        e.preventDefault();
        var randomId = 'BK' + Math.floor(Math.random() * 1000000);
        setBookingId(randomId);
        setPage(4);
    }

    function resetBooking() {
        setPage(1);
        setSelectedMovie(null);
        setName('');
        setEmail('');
        setMobile('');
        setBookingId('');
    }

    // Page 1 - Movie List
    if (page === 1) {
        return (
            <div>
                <h1>Movie Booking - Select a Movie</h1>
                <div className="movie-grid">
                    {movies.map(function(movie) {
                        return (
                            <div key={movie.id} className="movie-card" onClick={function() { selectMovie(movie); }}>
                                <img src={movie.image} alt={movie.title} />
                                <h3>{movie.title}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    // Page 2 - Movie Details
    if (page === 2) {
        return (
            <div>
                <h1>Movie Details</h1>
                <div className="movie-details">
                    <img src={selectedMovie.image} alt={selectedMovie.title} />
                    <h2>{selectedMovie.title}</h2>
                    <p>This is the description for {selectedMovie.title}.</p>
                    <button onClick={goToBookingForm}>Book Seat</button>
                    <button onClick={function() { setPage(1); }}>Back to Movies</button>
                </div>
            </div>
        );
    }

    // Page 3 - Booking Form
    if (page === 3) {
        return (
            <div>
                <h1>Book Your Seat</h1>
                <div className="booking-form">
                    <h2>Movie: {selectedMovie.title}</h2>
                    <form onSubmit={submitForm}>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={function(e) {
                                setName(e.target.value);
                            }}
                            required
                        />

                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={function(e) {
                                setEmail(e.target.value);
                            }}
                            required
                        />

                        <label>Mobile:</label>
                        <input
                            type="tel"
                            value={mobile}
                            onChange={function(e) {
                                setMobile(e.target.value);
                            }}
                            required
                        />

                        <button type="submit">Submit</button>
                        <button type="button" onClick={function() { setPage(2); }}>Back</button>
                    </form>
                </div>
            </div>
        );
    }

    // Page 4 - Confirmation
    if (page === 4) {
        return (
            <div>
                <h1>Booking Confirmed!</h1>
                <div className="confirmation">
                    <h2>Your seat has been booked successfully!</h2>
                    <p><strong>Booking ID:</strong> {bookingId}</p>
                    <p><strong>Movie:</strong> {selectedMovie.title}</p>
                    <p><strong>Name:</strong> {name}</p>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Mobile:</strong> {mobile}</p>
                    <button onClick={resetBooking}>Book Another Movie</button>
                </div>
            </div>
        );
    }
}

var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MovieBooking />);

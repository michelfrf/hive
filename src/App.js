import * as React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import logo from './logo.png';
import './App.css';

function App() {
    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            primary: {
                main: '#f7b90b',
                darker: '#053e85',
            },
            secondary: {
                main: '#0c0c0c'
            },
            neutral: {
                main: '#64748B',
                contrastText: '#fff',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
                <div className="App">
                    <header className="App-header">
                        <nav>
                            <Grid container justifyContent="space-between" alignItems="center">
                                <Grid item className="App-logo-container">
                                    <Grid container justifyContent="space-between" alignItems="center">
                                        <Grid item><img src={logo} className="App-logo" alt="logo"/></Grid>
                                        <Grid item><p>Hive <span>Investments</span></p></Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <a
                                        className="App-link"
                                        href="https://twitter.com/hiveinvestments"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        FOLLOW THE HIVE
                                    </a>
                                </Grid>
                            </Grid>
                        </nav>
                        <section className="hero">
                            <h1>DeFi as a service</h1>
                            <p>A Polygon based #DaaS project built by bees, Proudly a core protocol of the Union of Transparency #UoT.</p>
                            <Button href="https://medium.com/@hiveinvestments" variant="contained" color="secondary">Learn More</Button>
                            <Button href="https://take.quiz-maker.com/QQBMMFO66" variant="contained" color="secondary">Take the Quiz</Button>
                        </section>
                    </header>
                    <section className="section-main">
                        <h1>HIVE IN A NUTSHELL</h1>
                        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                            <Grid item className="main-item">
                                <FontAwesomeIcon className="fa-3x" color="#f7b90b" icon={faCheckCircle} />
                                <h2>Transparent</h2>
                                <p>As part of the UoT the goal is to be as transparent as possible out our community.</p>
                            </Grid>
                            <Grid item className="main-item">
                                <FontAwesomeIcon className="fa-3x" color="#f7b90b" icon={faCheckCircle} />
                                <h2>Sustainable</h2>
                                <p>Build to last, there are mechanisms in place that will help and sustain the protocol.</p>
                            </Grid>
                            <Grid item className="main-item">
                                <FontAwesomeIcon className="fa-3x" color="#f7b90b" icon={faCheckCircle} />
                                <h2>Community based</h2>
                                <p>The community was created by the community itself and without spending a dollar.</p>
                            </Grid>
                        </Grid>
                    </section>
                    <section className="section-secondary">
                        <Grid container direction="column" justifyContent="center" alignItems="center">
                            <Grid item className="secondary-item">
                                <h1>Sustainable <span>from the</span> beginning</h1>
                            </Grid>
                            <Grid item className="secondary-item">
                                <p>built by bees, for bees to take over #DeFi.</p>
                            </Grid>
                        </Grid>
                    </section>
                    <footer>
                        <p>Made with 💛 by <a href="https://twitter.com/mfrfcrypto">mfrfcrypto</a> 🐝</p>
                    </footer>
                </div>
        </ThemeProvider>
    );
}

export default App;

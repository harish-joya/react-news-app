import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light',
    };
  }

  toggleMode = () => {
    if (this.state.mode === 'dark') {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    } else {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
    }
  };

  getActiveCategory = () => {
    const path = window.location.pathname.toLowerCase();

    if (path === '/' || path === '/home') return 'home';

    if (
      path === '/sport' ||
      ['/cricket', '/football', '/hockey', '/badminton', '/kabbadi'].includes(path)
    )
      return 'sport';

    if (path === '/business') return 'business';
    if (path === '/economy') return 'economy';
    if (path === '/science') return 'science';
    if (path === '/entertainment') return 'entertainment';

    return '';
  };

  render() {
    const activeCategory = this.getActiveCategory();

    return (
      <div>
        <Router>
          <Navbar activeCategory={activeCategory} mode={this.state.mode} toggleMode={this.toggleMode} />
          <Routes>
            <Route exact path="/" element={<News key="" pageSize={15} page={1} q="" mode={this.state.mode} />} />
            <Route exact path="/sport" element={<News key="sport" pageSize={15} page={1} q="sport" mode={this.state.mode} />} />
            <Route exact path="/business" element={<News key="business" pageSize={15} page={1} q="business" mode={this.state.mode} />} />
            <Route exact path="/economy" element={<News key="economy" pageSize={15} page={1} q="economy" mode={this.state.mode} />} />
            <Route exact path="/science" element={<News key="science" pageSize={15} page={1} q="science" mode={this.state.mode} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={15} page={1} q="entertainment" mode={this.state.mode} />} />
          </Routes>
          <Routes>
            <Route exact path="/Cricket" element={<News key="Cricket" pageSize={15} page={1} q="Cricket" mode={this.state.mode} />} />
            <Route exact path="/Football" element={<News key="Football" pageSize={15} page={1} q="Football" mode={this.state.mode} />} />
            <Route exact path="/Hockey" element={<News key="Hockey" pageSize={15} page={1} q="Hockey" mode={this.state.mode} />} />
            <Route exact path="/Badminton" element={<News key="Badminton" pageSize={15} page={1} q="Badminton" mode={this.state.mode} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'
import Main from './components/main';
import  { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
  <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Renata Moura" scroll>
            <Navigation>
                <Link to ="home"> Home</Link>
                {/* <Link to="/cover">Cover Letter</Link> */}
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to='/courses'> Other Courses </Link>
                <Link to="/contact">Contact</Link>
             
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to ="/home"> Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/about">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to='/courses'> Other Courses </Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
      </div>
    );
  }
}

export default App;

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 75px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.4em;      /* Stay at the top */
    background-color: #222; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/',
                  name: 'Home',
                  css: 'fa fa-fw fa-home',
                  key: 1 
                },
                {
                    path: '/tenants',
                    name: 'tenant',
                    css: 'fa fa-fw fa-book',
                    key: 2 
                  },
                  {
                    path: '/users',
                    name: 'user',
                    css: 'fa fa-user-circle',
                    key: 3
                  },
                  {
                    path: '/datasets',
                    name: 'datasets',
                    css: 'fa fa-database',
                    key: 4
                  },
                  {
                    path: '/projects',
                    name: 'project',
                    css: 'fa fa-tasks',
                    key: 5 
                  },
                  {
                    path: '/jobs',
                    name: 'jobs',
                    css: 'fa fa-user-secret',
                    key: 6
                  },
                  {
                    path: '/connector',
                    name: 'connectors',
                    css: 'fa fa-plug',
                    key:7 
                  }

              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 75px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    a {
        font-size: 2.7em;
        color: ${(props) => props.active ? "white" : "#9FFFCB"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
        <NavIcon> {this.props.name} </NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`
font-size:10px;
`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}
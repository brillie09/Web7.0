import React, { Component } from 'react';

import SearchBar from './SearchBar';
import UserPanel from './UserPanel';

class Header extends Component {
    render() {
        return (
          <header classname="Header">
            <div className="container">
                <div className="row">
                          <div className="col-sm-3">
                            <SearchBar />
                          </div>
                          <div className="col-sm-6">
                            TechKids Hot Girls
                          </div>
                          <div className="col-sm-3">
                            <UserPanel />
                          </div>
                </div>
            </div>
          </header>
        );
    }
}
export default Header;

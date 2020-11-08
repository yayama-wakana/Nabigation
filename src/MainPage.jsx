import React from 'react';
import ReactDOM from 'react-dom';
import {Toolbar, Page, Button} from 'react-onsenui';

import SecondPage from './SecondPage'

export default class MainPage extends React.Component {
  pushPage() {
    this.props.navigator.pushPage({component: SecondPage, props:{value:0}});
  }

  renderToolbar() {
    return (
      <Toolbar>
        <div className="center">Navigator</div>
      </Toolbar>
    );
  }

  render() {
    return (
      <Page renderToolbar={this.renderToolbar}>
        <p style={{textAlign: 'center'}}>
          <a href='#' onClick={this.pushPage.bind(this)}>Push page</a>
        </p>
      </Page>
    );
  }
}
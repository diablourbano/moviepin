import React, { Component } from 'react';

class MenuLink extends Component {
  render() {
    return (
      <li className={'menu__item ' + this.props.menuItemClassName}>
        <a id={this.props.linkId}
           className={'menu__link -regular ' + this.props.menuLinkClassName}
           alt={this.props.altLink}
           onClick={() => {
             this.props.onClick();
           }}>{this.props.label}</a>
      </li>
    );
  }
}

class AbstractMenu extends Component {
  render() {
    return (
      <ul className={this.props.className }>
        {this.props.children}
      </ul>
    );
  }
}

MenuLink.defaultProps = {
  menuItemClassName: '',
  menuLinkClassName: ''
}

export { AbstractMenu, MenuLink };

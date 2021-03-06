import React, { Component } from 'react';

import AccessForm from './access-form';
import InputField from './input-field';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      usernameValue: '',
      passwordValue: '',
      shouldDisable: true
    };
  }

  shouldActivateSubmitButton(username, password) {
    if (username && password) {
      this.setState({ shouldDisable: false });
    } else {
      this.setState({ shouldDisable: true });
    }
  }

  usernameChange(username) {
    this.setState({ usernameValue: username });
    this.shouldActivateSubmitButton(username, this.state.passwordValue);
  }

  passwordChange(password) {
    this.setState({ passwordValue: password });
    this.shouldActivateSubmitButton(this.state.usernameValue, password);
  }

  shouldAccess() {
    const username = this.state.usernameValue;
    const password = this.state.passwordValue;
    const canAccess = username == 'test' && password == 'test';

    this.props.shouldAccess(canAccess);
  }

  render() {
    return (
      <AccessForm submitLabel='Sign In'
                  shouldDisable={this.state.shouldDisable}
                  shouldAccess={this.shouldAccess.bind(this)}>
        <fieldset className='form__fieldset'>
          <InputField fieldValue={this.state.usernameValue}
                      inputType='text'
                      inputName='username'
                      onChange={(username) => {
                        this.usernameChange(username);
                      }}/>
        </fieldset>

        <fieldset className='form__fieldset'>
          <InputField fieldValue={this.state.passwordValue}
                      inputType='password'
                      inputName='password'
                      onChange={(password) => {
                        this.passwordChange(password)
                      }}/>
        </fieldset>
      </AccessForm>
    );
  }
}

export default SignIn;

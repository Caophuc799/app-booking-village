import type { ReactNode } from 'react';
import { Component } from 'react';
import { setJSExceptionHandler } from 'react-native-exception-handler';

import { log } from 'core/logger';
import { StyleSheet, View } from 'react-native';
import { ErrorScreen, Text } from 'common/components';
import { makeStyles } from '@rneui/themed';

type Props = {
  children: ReactNode;
};

type State = {
  error: Error | null;
};

class ErrorBoundary extends Component<Props, State> {
  // eslint-disable-next-line react/state-in-constructor
  state: State = {
    error: null,
  };

  componentDidMount() {
    setJSExceptionHandler(error => {
      this.setState({ error });
      log.error(error);
    }, false);
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
    log.error(error);
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;

    if (error) {
      return <ErrorScreen />;
    }

    return children;
  }
}

export default ErrorBoundary;

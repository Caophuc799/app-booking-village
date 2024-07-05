import type { ReactNode } from 'react';
import { Component } from 'react';
import { setJSExceptionHandler } from 'react-native-exception-handler';

import { log } from 'core/logger';
import { View } from 'react-native';
import { Text } from '@rneui/base';

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
      return (
        // <ErrorScreen
        //   subTitle={isStoreBuild() ? undefined : error.toString()}
        //   onClose={() => this.setState({ error: null })}
        // />
        <View>
          <Text>There are some error</Text>
        </View>
      );
    }

    return children;
  }
}

export default ErrorBoundary;

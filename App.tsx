import React from 'react';
import {Navigator} from './src/navigation/Navigator';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer theme={theme}>
        <Navigator />
      </NavigationContainer>
    </QueryClientProvider>

  );
};

const styles = {  
  container: {
    flex: 1,
    backgroundColor: '#5372ac',
    alignItems: 'center',
    justifyContent: 'center',
  },  
};


export default App;
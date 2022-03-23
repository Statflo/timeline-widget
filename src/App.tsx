import React from 'react';
import { TextKitWidgetProvider } from '@statflo/textkit-widget-sdk-react';
import Widget from './Widget';

function App() {
  return (
    <TextKitWidgetProvider header='Action Widget' label='Your widget label'>
      <Widget />
    </TextKitWidgetProvider>
  );
}

export default App;


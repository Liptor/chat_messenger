import {
  ChannelList,
  Chat,
  DeepPartial,
  OverlayProvider,
  Theme,
} from 'stream-chat-react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, useColorScheme } from 'react-native';
import { StreamChat } from 'stream-chat';

const client = StreamChat.getInstance('etk2bmb98add');

function App(): JSX.Element {
  const colorSheme = useColorScheme();

  const getTheme = (): DeepPartial<Theme> => ({
    colors: colorSheme === 'dark' ? { black: '#FFFFF' } : { black: '#00000' },
  });

  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    setTheme(getTheme());
  }, [colorSheme]);

  return (
    <OverlayProvider value={{ style: theme }}>
      <SafeAreaView />
      <Chat client={client}>
        <ChannelList />
      </Chat>
      {/* <Navigation /> */}
    </OverlayProvider>
  );
}

export default App;

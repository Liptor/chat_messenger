import React, { useEffect, useState } from 'react';
import { SafeAreaView, useColorScheme, View} from 'react-native';

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
    <View value={{ style: theme }}>
      <SafeAreaView />
      
      {/* <Navigation /> */}
    </View>
  );
}

export default App;

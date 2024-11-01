import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { File, Paths } from 'expo-file-system/next';
import { WebView } from 'react-native-webview';

function createLocalHtmlFile() {
  const html = `
  `;

  const filePath = new File(Paths.document, 'hello.html');
  filePath.create();
  filePath.write(`
    <html>
      <head>
        <title>Local HTML File</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
      </body>
    </html>
  `);
  return filePath;
}

export default function App() {
  const [htmlPath, setHtmlPath] = useState<string>('');
  useEffect(() => {
    const filePath = createLocalHtmlFile();
    setHtmlPath(filePath.uri);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text>HTML file path: {htmlPath}</Text>
      </View>
      {htmlPath ? (
        <WebView
          source={{ uri: htmlPath }}
          style={styles.webview}
          allowFileAccess
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 56,
    backgroundColor: '#fff',
  },
  header: {
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
  },
  webview: {
    flex: 1,
  },
});

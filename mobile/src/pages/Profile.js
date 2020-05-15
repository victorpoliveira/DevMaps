import React from 'react';
import { WebView } from 'react-native-webview';

function Profile () {
   return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/victorpoliveira` }} />
}

export default Profile;
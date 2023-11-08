// withHooks

import React from 'react';
import { Text, View } from 'react-native';

export interface MainIndexArgs {}
export interface MainIndexProps {}
export default function m(props: MainIndexProps): any {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 14,
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        Halo Saya Surya
      </Text>
    </View>
  );
}

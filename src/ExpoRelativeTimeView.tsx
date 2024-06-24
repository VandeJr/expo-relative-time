import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoRelativeTimeViewProps } from './ExpoRelativeTime.types';

const NativeView: React.ComponentType<ExpoRelativeTimeViewProps> =
  requireNativeViewManager('ExpoRelativeTime');

export default function ExpoRelativeTimeView(props: ExpoRelativeTimeViewProps) {
  return <NativeView {...props} />;
}

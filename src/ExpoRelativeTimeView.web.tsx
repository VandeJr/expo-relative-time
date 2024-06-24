import * as React from 'react';

import { ExpoRelativeTimeViewProps } from './ExpoRelativeTime.types';

export default function ExpoRelativeTimeView(props: ExpoRelativeTimeViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

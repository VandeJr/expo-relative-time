import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoRelativeTime.web.ts
// and on native platforms to ExpoRelativeTime.ts
import ExpoRelativeTimeModule from './ExpoRelativeTimeModule';
import ExpoRelativeTimeView from './ExpoRelativeTimeView';
import { ChangeEventPayload, ExpoRelativeTimeViewProps } from './ExpoRelativeTime.types';

// Get the native constant value.
export const PI = ExpoRelativeTimeModule.PI;

export function hello(): string {
  return ExpoRelativeTimeModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoRelativeTimeModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoRelativeTimeModule ?? NativeModulesProxy.ExpoRelativeTime);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoRelativeTimeView, ExpoRelativeTimeViewProps, ChangeEventPayload };

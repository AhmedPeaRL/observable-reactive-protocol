import { mutate } from './mutation/mutate.js';
import { observe } from './observe/index.js';

export function engage(input) {
  const mutation = mutate(input);
  const observation = observe(mutation);
  return observation;
}

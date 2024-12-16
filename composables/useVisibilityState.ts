export const useVisibilityState = () => {
  return useState('isElementVisible', () => false);
}

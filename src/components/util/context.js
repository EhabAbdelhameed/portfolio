import { createContext } from 'react';

export const HideContext = createContext({
 hidden: false,
 show: () => {},
 hide: () => {},
});

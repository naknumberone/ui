import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { semanticTokens } from './semanticTokens';
import { components } from './components';

export const theme = extendTheme({
  colors,
  semanticTokens,
  components,
});

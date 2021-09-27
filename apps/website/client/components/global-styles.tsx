/**
 * Global styles get added in the wrong order when using styled-components.
 * Exporting the styles from this file is the current workaround to this issue.
 * https://github.com/ben-rogerson/twin.macro/issues/277#issuecomment-754240911
 */

import React from 'react';
import tw, {GlobalStyles as BaseStyles} from 'twin.macro';
import {createGlobalStyle} from "styled-components";

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles;

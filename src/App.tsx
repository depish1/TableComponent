import React, { FunctionComponent } from 'react';
import TableComponent from 'components/TableComponent/TableComponent';
import { exampleData, columns } from 'utils/exampleData';
import { theme } from 'styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyles';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <TableComponent dataset={exampleData} columns={columns} />
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;

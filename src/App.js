import { MantineProvider, AppShell, Navbar, Header, Title, } from "@mantine/core";
import { AddNewForm } from "./AddNewForm";
import { Playground } from "./Playground";

function App() {


  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <AppShell
      padding="lg"
      navbar={<Navbar width={{ base: 300 }}  p="md"><AddNewForm /></Navbar>}
      header={<Header height={90} p="lg"><Title>Unibet: Player Notes</Title></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Playground />
    </AppShell>
    </MantineProvider>
  );
}

export default App;

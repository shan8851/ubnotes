import { MantineProvider, AppShell, Navbar, Header, Title, Space, } from "@mantine/core";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { AddNewForm } from "./AddNewForm";
import { Search } from "./components/Search";
import { db } from "./firebase-config";
import { RealTimeList } from "./RealTimeList";

function App() {
  const [data, setData] = useState([]);
  const [notes, setNotes] = useState([]);
  const [searchString, setSearchString] = useState('')
  const notesCollectionRef = collection(db, 'notes');

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollectionRef, snapshot => {
      setData(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    })
    return () => {
      unsubscribe()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setNotes(data.filter(d => d.alias.toLowerCase().includes(searchString.toLowerCase())))
  }, [data, searchString])



  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
        <AppShell
      padding="lg"
      navbar={<Navbar width={{ base: 500 }}  p="md">
                <Search searchString={searchString} setSearchString={setSearchString} />
                <Space h="xl" />

                <AddNewForm />
              </Navbar>
      }
      header={<Header height={90} p="lg"><Title>Unibet: Player Notes</Title></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <RealTimeList notes={notes} />
    </AppShell>
    </MantineProvider>
  );
}

export default App;

import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection,  onSnapshot } from 'firebase/firestore'
import { NoteCard } from "./components/NoteCard";
import { SimpleGrid } from "@mantine/core";

export const RealTimeList = () => {
  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, 'notes');

  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollectionRef, snapshot => {
      setNotes(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    })
    return () => {
      unsubscribe()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <SimpleGrid cols={3}>
      {notes.map((user) => (
      <NoteCard key={user.id} id={user.id} user={user} />
    ))}
      </SimpleGrid>
      <div style={{ display: 'flex', gap: 16}}></div>
    </div>
  );
}

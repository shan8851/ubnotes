import { useEffect, useState } from "react";
import { db } from "./firebase-config";
import { collection,  onSnapshot } from 'firebase/firestore'
import { NoteCard } from "./components/NoteCard";
export const Playground = () => {
  const [notes, setNotes] = useState([]);
  const notesCollectionRef = collection(db, 'notes');



  useEffect(() => {
    const unsubscribe = onSnapshot(notesCollectionRef, snapshot => {
      setNotes(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16}}>{notes.map((user) => (
      <NoteCard key={ user.id} id={user.id} user={user} />
    ))}</div>

    </div>
  );
}

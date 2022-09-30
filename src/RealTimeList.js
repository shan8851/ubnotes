import { NoteCard } from "./components/NoteCard";
import { SimpleGrid } from "@mantine/core";

export const RealTimeList = ({notes}) => {
  if (!notes) return <div>Loading...</div>
  return (
    <div>
      <SimpleGrid cols={3}>
      {notes.map((user) => (
      <NoteCard key={user.id} id={user.id} user={user} />
    ))}
      </SimpleGrid>
    </div>
  );
}

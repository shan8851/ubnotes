import { NoteCard } from "./components/NoteCard";
import { Notification, SimpleGrid } from "@mantine/core";

export const RealTimeList = ({notes}) => {
  console.log(notes)
  if (!notes.length > 0) return    <Notification title="No Results">
        Currently no notes, add new notes using the form in the sidebar
      </Notification>
  return (
    <div>
      <SimpleGrid>
      {notes.map((user) => (
      <NoteCard key={user.id} id={user.id} user={user} />
    ))}
      </SimpleGrid>
    </div>
  );
}

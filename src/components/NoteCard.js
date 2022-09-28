import { Badge, Button, Card, Chip, Group, Stack, Text, Title } from "@mantine/core";
import { deleteNote, updateNote } from "../lib";

export const NoteCard = ({ id, user }) => {
  const { alias, stakes, notes, label } = user
  return (
    <Card
      shadow='md'
      radius="md"
      withBorder
    >
      <Stack>
        <Title order={4}>{alias}</Title>
        <div style={{ display: 'flex', gap: 4 }}>
          {stakes.map(stake => (
            <Badge color='grape' key={stake}>{stake}</Badge>
          ))}
        </div>
        <Text>{notes}</Text>
        {label && (
          <Chip>{label}</Chip>
        )}
        <Group>
          <Button onClick={() => updateNote(user.id, user)} styles={{ root: { marginRight: 16 } }} variant="outline">Update</Button>
          <Button onClick={() => deleteNote(user.id)} variant="filled" color='red'>Delete</Button>
        </Group>
      </Stack>
    </Card>
  )
}

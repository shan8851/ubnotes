import { Badge, Button, Card, Chip, Group, Stack, Text, Title } from "@mantine/core";
import { deleteNote } from "../lib";
import { UpdateModal } from "./UpdateModal";

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
        {stakes && (
          <div style={{ display: 'flex', gap: 4 }}>
          {stakes.map(stake => (
            <Badge color='grape' key={stake}>{stake}</Badge>
          ))}
        </div>
        )}
        <Text>{notes}</Text>
        {label && (
          <Chip>{label}</Chip>
        )}
        <Group>
          <UpdateModal id={id} data={user} />
          <Button onClick={() => deleteNote(user.id)} variant="filled" color='red'>Delete</Button>
        </Group>
      </Stack>
    </Card>
  )
}

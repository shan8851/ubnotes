import { Badge, Card, Group, Stack, Text, Title } from "@mantine/core";
import { getLabelColor } from "../lib";
import { UpdateModal } from "./UpdateModal";

export const NoteCard = ({ id, user }) => {
  const { alias, stakes, notes, tag } = user
  console.log(user)
  return (
    <Card
      shadow='md'
      radius="md"
      withBorder
    >
      <Stack>
        <Title order={4}>{alias}</Title>
        {stakes && (
        <>
          <Title order={6}>Stakes:</Title>
          <div style={{ display: 'flex', gap: 4 }}>
          {stakes.map(stake => (
            <Badge color="dark" key={stake}>{stake}</Badge>
          ))}
        </div>
        </>
        )}
        <Title order={6}>Notes:</Title>
        <Text dangerouslySetInnerHTML={{ __html: notes}}></Text>
        {tag && (
        <>
          <Title order={6}>Label:</Title>
          <div style={{ display: 'flex', gap: 4}}>
            {tag.map(t => (
          <Badge color={getLabelColor(t)} key={t}>{t}</Badge>
        ))}</div>
        </>

        )}
        <Group>
          <UpdateModal id={id} data={user} />
        </Group>
      </Stack>
    </Card>
  )
}

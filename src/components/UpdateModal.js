import { useState } from 'react';
import { Modal, Button, Input, MultiSelect, Textarea, Select, Title  } from '@mantine/core';
import { updateNote } from '../lib';
import { stakeOptions, tagOptions } from '../constants';

export const UpdateModal = ({ id, data }) => {
const [opened, setOpened] = useState(false);
  const [alias, setAlias] = useState(data.alias ?? '');
  const [stakes, setStakes] = useState(data.stakes ?? []);
  const [notes, setNotes] = useState(data.notes ?? '');
  const [tag, setTag] = useState(data.tag ?? '');

  const handleUpdate = async () => {
    const note = {
        alias,
        stakes,
        notes,
        tag
      }
      await updateNote(id, note)
      setOpened(false)
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
      >
      <Title order={3}>Update Note</Title>
         <Input.Wrapper label="Alias" required>
        <Input
          placeholder="Enter alias"
          onChange={e => setAlias(e.target.value)}
          value={alias}
        />
      </Input.Wrapper>

      <MultiSelect
        label="Stakes they play"
        placeholder="Choose more than one"
        data={stakeOptions}
        value={stakes}
        onChange={setStakes}
      />
      <Textarea
        placeholder="Notes..."
        label="Notes"
        autosize
        minRows={4}
        value={notes}
        onChange={e => setNotes(e.target.value)}
        withAsterisk
      />
      <Select
        label="Tag"
        placeholder="Pick one"
        data={tagOptions}
        value={tag}
        onChange={setTag}
      />
      <Button styles={{ root: { marginTop: 8 }}} onClick={handleUpdate}>Update</Button>
      </Modal>

        <Button variant='outline' onClick={() => setOpened(true)}>Update</Button>
    </>
  );
}

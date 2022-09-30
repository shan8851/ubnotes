import { useState } from 'react';
import { Modal, Button, Input, MultiSelect, Select, Title } from '@mantine/core';
import { updateNote } from '../lib';
import { stakeOptions, tagOptions } from '../constants';
import RichTextEditor from '@mantine/rte';

export const UpdateModal = ({ id, data }) => {
  const [opened, setOpened] = useState(false);
  const [alias, setAlias] = useState(data.alias ?? '');
  const [stakes, setStakes] = useState(data.stakes ?? []);
  const [tag, setTag] = useState(data.tag ?? '');
  const [notes, onChange] = useState(data.notes ?? '');

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
        size={800}
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
        <RichTextEditor
          id="rte"
          controls={[
            ['bold', 'italic', 'underline', 'link', 'image'],
            ['unorderedList', 'h1', 'h2', 'h3'],
          ]}
          onChange={onChange}
          value={notes}
        />
        <Select
          label="Tag"
          placeholder="Pick one"
          data={tagOptions}
          value={tag}
          onChange={setTag}
        />
        <Button styles={{ root: { marginTop: 8 } }} onClick={handleUpdate}>Update</Button>
      </Modal>

      <Button variant='outline' onClick={() => setOpened(true)}>Update</Button>
    </>
  );
}

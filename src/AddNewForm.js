import { Input, MultiSelect, Textarea, Select, Button, Title, Notification, Space } from '@mantine/core';
import { useState } from 'react';
import { stakeOptions, tagOptions } from './constants';
import { createNote } from './lib';

export const AddNewForm = () => {
  const [alias, setAlias] = useState('');
  const [stakes, setStakes] = useState([]);
  const [notes, setNotes] = useState('');
  const [tag, setTag] = useState('');
  const [showError, setShowError] = useState(false);

  const handleReset = () => {
    setAlias('');
    setStakes([]);
    setNotes('');
    setTag('');
  }

  const onAdd = async () => {
    if (!alias || !notes) {
      setShowError(true)
      setTimeout(() => {
        setShowError(false)
      }, 3000);
    } else {
      const note = {
        alias,
        stakes,
        notes,
        tag
      }
      await createNote(note);
      handleReset()
    }
  }

  return (
    <div>
      <Title order={2}>Add new note</Title>
      {showError && (
        <Notification color='red' title="Oops, something went wrong">
          Please make sure you add at least Alias and notes.
        </Notification>
      )}
      <Input.Wrapper label="Alias" required>
        <Input
          placeholder="Enter alias"
          onChange={e => setAlias(e.target.value)}
          value={alias}
        />
      </Input.Wrapper>
      <Space h="lg" />
      <MultiSelect
        label="Stakes they play"
        placeholder="Choose more than one"
        data={stakeOptions}
        value={stakes}
        onChange={setStakes}
      />
      <Space h="lg" />
      <Textarea
        placeholder="Notes..."
        label="Notes"
        autosize
        minRows={4}
        value={notes}
        onChange={e => setNotes(e.target.value)}
        withAsterisk
      />
      <Space h="lg" />
      <Select
        label="Tag"
        placeholder="Pick one"
        data={tagOptions}
        value={tag}
        onChange={setTag}
      />
      <Button styles={{ root: { marginTop: 16 } }} fullWidth onClick={onAdd}>Add</Button>
    </div>
  )
}

import { Input, Title } from "@mantine/core"


export const Search = ({ searchString, setSearchString }) => {

  return (
    <>
      <Title order={2}>Search</Title>
      <Input
      onChange={e => setSearchString(e.target.value)}
      value={searchString}
      placeholder="Search by alias"
    />
    </>
  )
}

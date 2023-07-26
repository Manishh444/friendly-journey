import { Box, Button, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Search2Icon } from '@chakra-ui/icons'

// The default icon size is 1em (16px)

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  return (
    <>
      <Box>
        <Tooltip label='search user' hasArrow placeItems={'bottom-end'}>
          <Button variant={'ghost'}>
             <Search2Icon/>
        </Button>
        </Tooltip>
    </Box>
    </>)
}

export default SideDrawer
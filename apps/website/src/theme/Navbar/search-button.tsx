import { Box } from '@dittox/react';
import { Button } from '@site/src/ui';
import React from 'react';
import { forwardRef } from 'react';
import { LuSearch } from 'react-icons/lu';

export const SearchButton = forwardRef<HTMLButtonElement, any>(
  function SearchButton(props, ref) {
    return (
      <Button as={'button'} type="button" minW={180} ref={ref} {...props}>
        <LuSearch />
        <Box
          ms="1"
          fontWeight="normal"
          flex="1"
          minW="0"
          textAlign="start"
          textOverflow="ellipsis"
          overflow="hidden"
        >
          Pesquisar...
        </Box>
        {/* <Kbd
                    variant="outline"
                    bg="bg"
                    fontSize="0.8em"
                    letterSpacing="widest"
                    me="-1"
                >
                    ⌘K
                </Kbd> */}
      </Button>
    );
  }
);

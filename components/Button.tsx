import React, {FC} from 'react'
import { Button } from '@chakra-ui/react';

interface buttonProps {
    title: string,
}

const CustomButton: FC <buttonProps> = ({title}) => {
    return (
        <Button _hover={{bg: '#0D1821'}} color="#fafafa" borderRadius="10px" backgroundColor="#FB6376">
            {title}
        </Button>
    )
}

export default CustomButton;
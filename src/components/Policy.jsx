import React from 'react'
import Container from './layouts/Container';
import Flex from './layouts/Flex';
import {PiNumberTwoBold} from 'react-icons/pi'
import {MdLocalShipping} from 'react-icons/md'
import {VscDebugRestart} from 'react-icons/vsc'

const Policy = () => {
  return (
    <div className='border-b border-[#F0F0F0] py-6'>
        <Container>
            <Flex className='item-center justify-between'>
                <Flex className='items-center gap-x-1 justify-center'>
                    <PiNumberTwoBold className='text-2xl'/>
                    <h5 className='text-base text-[#6D6D6D]'>Two years warranty</h5>
                </Flex>
                <Flex className='items-center gap-x-3 justify-center'>
                    <MdLocalShipping className='text-2xl'/>
                    <h5 className='text-base text-[#6D6D6D]'>Free shipping</h5>
                </Flex>
                <Flex className='items-center gap-x-2 justify-center'>
                    <VscDebugRestart className='text-2xl'/>
                    <h5 className='text-base text-[#6D6D6D]'>Return policy in 30 days</h5>
                </Flex>
            </Flex>
        </Container>
    </div>
  )
}

export default Policy
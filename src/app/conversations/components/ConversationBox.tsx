import React, {useCallback, useMemo} from 'react'
import { useRouter } from 'next/navigation'
import { Conversation, User, Message } from '@prisma/client'
import {format} from "date-fns"
import { useSession } from 'next-auth/react'
import clsx from 'clsx'
import { FullConversationType } from '../../../types'

interface ConversationBoxProps{
    data: FullConversationType,
    selected?: boolean 
}

const ConversationBox: React.FC<ConversationBoxProps> = ({data, selected}) => {
    
  return (
    <div>ConversationBox</div>
  )
}

export default ConversationBox
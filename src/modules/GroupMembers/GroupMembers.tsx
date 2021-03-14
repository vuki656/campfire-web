import {
    useMutation,
    useQuery,
} from '@apollo/client'
import { useRouter } from 'next/router'
import React from 'react'

import { SectionHeader } from '../../components'
import { KICK_USER } from '../../graphql/mutations'
import { GROUP_MEMBERS } from '../../graphql/queries'
import type {
    GroupMembersQuery,
    GroupMembersQueryVariables,
    KickUserMutation,
    KickUserMutationVariables,
} from '../../graphql/types'

import {
    GroupMember,
    GroupMemberAction,
    GroupMemberImage,
    GroupMemberUsername,
} from './GroupMembers.styles'

export const GroupMembers: React.FunctionComponent = () => {
    const router = useRouter()

    const groupId = router.query.groupId as string

    const [kickUserMutation] = useMutation<KickUserMutation, KickUserMutationVariables>(KICK_USER)

    const { data } = useQuery<GroupMembersQuery, GroupMembersQueryVariables>(GROUP_MEMBERS, {
        fetchPolicy: 'network-only',
        variables: {
            args: {
                groupId: groupId,
            },
        },
    })

    const handleUserKick = (memberId: string) => () => {
        void kickUserMutation({
            refetchQueries: ['GroupMembers'],
            variables: {
                input: {
                    groupId: groupId,
                    userId: memberId,
                },
            },
        })
    }

    return (
        <div>
            <SectionHeader title="Members" />
            {data?.groupMembers.map((member) => {
                return (
                    <GroupMember key={member.id}>
                        <GroupMemberImage
                            height={50}
                            src={member.imageURL}
                            width={50}
                        />
                        <GroupMemberUsername>
                            {member.username}
                        </GroupMemberUsername>
                        <GroupMemberAction
                            onClick={handleUserKick(member.id)}
                            variant="outlined"
                        >
                            Kick
                        </GroupMemberAction>
                    </GroupMember>
                )
            })}
        </div>

    )
}

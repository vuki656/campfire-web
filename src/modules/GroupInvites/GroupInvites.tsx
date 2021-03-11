import {
    useMutation,
    useQuery,
} from '@apollo/client'
import { Button } from '@dvukovic/dujo-ui'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

import { SectionHeader } from '../../components'
import {
    CREATE_INVITE,
    DELETE_INVITE,
} from '../../graphql/mutations'
import { GROUP_INVITES } from '../../graphql/queries'
import type {
    CreateInviteMutation,
    CreateInviteMutationVariables,
    DeleteInviteMutation,
    DeleteInviteMutationVariables,
    GroupInvitesQuery,
    GroupInvitesQueryVariables,
} from '../../graphql/types'
import { useCookies } from '../../lib/useCookies'

import {
    GroupInvitesUser,
    GroupInvitesUserImage,
} from './GroupInvites.styles'

export const Invites: React.FunctionComponent = () => {
    const router = useRouter()
    const cookies = useCookies()

    const groupId = router.query.groupId as string

    const [inviteUserMutation] = useMutation<CreateInviteMutation, CreateInviteMutationVariables>(CREATE_INVITE)

    const [deleteInviteMutation] = useMutation<DeleteInviteMutation, DeleteInviteMutationVariables>(DELETE_INVITE)

    const { data } = useQuery<GroupInvitesQuery, GroupInvitesQueryVariables>(GROUP_INVITES, {
        variables: {
            args: {
                groupId: groupId,
            },
            nonGroupMembersArgs: {
                groupId: groupId,
            },
        },
    })

    const handleInvite = (toUserId: string) => () => {
        void inviteUserMutation({
            refetchQueries: ['GroupInvites'],
            variables: {
                input: {
                    fromUserId: cookies.userId,
                    groupId: groupId,
                    toUserId: toUserId,
                },
            },
        })
    }

    const handleInviteCancel = (inviteId: string) => () => {
        void deleteInviteMutation({
            refetchQueries: ['GroupInvites'],
            variables: {
                input: {
                    inviteId: inviteId,
                },
            },
        })
    }

    return (
        <div>
            <SectionHeader title="Invite Members" />
            {data?.nonGroupMembers.map((user) => {
                return (
                    <GroupInvitesUser key={user.id}>
                        <GroupInvitesUserImage
                            height={50}
                            src={user.imageURL}
                            width={50}
                        />
                        {user.username}
                        <Button
                            onClick={handleInvite(user.id)}
                            variant="outlined"
                        >
                            Invite
                        </Button>
                    </GroupInvitesUser>
                )
            })}
            <SectionHeader
                title="Invited Members"
                topSpacing={true}
            />
            {data?.groupInvites.map((invite) => {
                const { id, imageURL, username } = invite.toUser

                return (
                    <GroupInvitesUser key={id}>
                        <GroupInvitesUserImage
                            height={50}
                            src={imageURL}
                            width={50}
                        />
                        {username}
                        <Button
                            onClick={handleInviteCancel(invite.id)}
                            variant="outlined"
                        >
                            Delete
                        </Button>
                    </GroupInvitesUser>
                )
            })}
        </div>
    )
}

import {
    useMutation,
    useQuery,
} from '@apollo/client'
import { Button } from '@dvukovic/dujo-ui'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

import { SectionHeader } from '../../components'
import { Invite } from '../../components/Invite'
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

export const Invites: React.FunctionComponent = () => {
    const router = useRouter()
    const cookies = useCookies()

    const groupId = router.query.groupId as string

    const [inviteUserMutation] = useMutation<CreateInviteMutation, CreateInviteMutationVariables>(CREATE_INVITE)

    const [deleteInviteMutation] = useMutation<DeleteInviteMutation, DeleteInviteMutationVariables>(DELETE_INVITE)

    const { data } = useQuery<GroupInvitesQuery, GroupInvitesQueryVariables>(GROUP_INVITES, {
        fetchPolicy: 'network-only',
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

    const handleInviteDelete = (inviteId: string) => () => {
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
            <SectionHeader title="Invite Users" />
            {data?.nonGroupMembers.length
                ? data?.nonGroupMembers.map((user) => {
                    return (
                        <Invite
                            action={(
                                <Button
                                    onClick={handleInvite(user.id)}
                                    variant="outlined"
                                >
                                    Invite
                                </Button>
                            )}
                            key={user.id}
                            user={user}
                        />
                    )
                })
                : (
                    <p>
                        No one to invite, what?
                    </p>
                )}
            <SectionHeader
                title="Invited Users"
                topSpacing={true}
            />
            {data?.groupInvites.length
                ? data?.groupInvites.map((invite) => {
                    return (
                        <Invite
                            action={(
                                <Button
                                    onClick={handleInviteDelete(invite.id)}
                                    variant="outlined"
                                >
                                    Delete
                                </Button>
                            )}
                            key={invite.id}
                            message={`Invited by ${invite.fromUser.username}`}
                            user={invite.toUser}
                        />
                    )
                })
                : (
                    <p>
                        No one is invited. Yet.
                    </p>
                )}
        </div>
    )
}

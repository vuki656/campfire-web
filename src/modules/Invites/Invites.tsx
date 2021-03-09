import {
    useMutation,
    useQuery,
} from '@apollo/client'
import { Button } from '@dvukovic/dujo-ui'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

import { PageHeader } from '../../components/SectionHeader/PageHeader'
import {
    CREATE_INVITE,
    DELETE_INVITE,
} from '../../graphql/mutations'
import {
    GROUP_INVITES,
    NON_GROUP_MEMBERS,
    USER,
} from '../../graphql/queries'
import type {
    DeleteInviteMutation,
    DeleteInviteMutationVariables,
    GroupInvitesQuery,
    GroupInvitesQueryVariables,
    InviteUserMutation,
    InviteUserMutationVariables,
    NonGroupMembersQuery,
    NonGroupMembersQueryVariables,
    UserQuery,
} from '../../graphql/types'

import {
    InvitesFromUser,
    InvitesListItemDetails,
    InvitesToUsername,
    InvitesUser,
    InvitesUserDetails,
    InvitesUserImage,
} from './Invites.styles'

export const Invites: React.FunctionComponent = () => {
    const router = useRouter()

    const groupId = router.query.groupId as string

    const [inviteUserMutation] = useMutation<InviteUserMutation, InviteUserMutationVariables>(CREATE_INVITE)
    const [deleteInviteMutation] = useMutation<DeleteInviteMutation, DeleteInviteMutationVariables>(DELETE_INVITE)

    const { data: userData } = useQuery<UserQuery>(USER)

    const { data: groupInvitesData } = useQuery<GroupInvitesQuery, GroupInvitesQueryVariables>(GROUP_INVITES, {
        variables: {
            args: {
                groupId: router.query.groupId as string,
            },
        },
    })

    const { data: nonGroupMembersData } = useQuery<
        NonGroupMembersQuery,
        NonGroupMembersQueryVariables
    >(NON_GROUP_MEMBERS, {
        variables: {
            args: {
                groupId: router.query.groupId as string,
            },
        },
    })

    const handleInvite = (toUserId: string) => () => {
        void inviteUserMutation({
            refetchQueries: ['NonGroupMembers', 'GroupInvites'],
            variables: {
                input: {
                    fromUserId: userData?.user?.id,
                    groupId: groupId,
                    toUserId: toUserId,
                },
            },
        })
    }

    const handleInviteCancel = (toUserId: string) => () => {
        void deleteInviteMutation({
            refetchQueries: ['NonGroupMembers', 'GroupInvites'],
            variables: {
                input: {
                    groupId: groupId,
                    invitedUserId: toUserId,
                },
            },
        })
    }

    return (
        <div>
            <PageHeader title="Invites" />
            {nonGroupMembersData?.nonGroupMembers.map((user) => {
                return (
                    <InvitesUser key={user.id}>
                        <InvitesUserDetails>
                            <InvitesUserImage
                                height={50}
                                src={user.imageURL}
                                width={50}
                            />
                            {user.username}
                        </InvitesUserDetails>
                        <Button
                            onClick={handleInvite(user.id)}
                            variant="outlined"
                        >
                            Invite
                        </Button>
                    </InvitesUser>
                )
            })}
            <PageHeader title="Sent Invites">
                {groupInvitesData?.groupInvites.map((invite) => {
                    return (
                        <InvitesUser key={invite.toUser.id + invite.fromUser.id}>
                            <InvitesListItemDetails>
                                <InvitesUserImage
                                    height={50}
                                    src={invite.toUser.imageURL}
                                    width={50}
                                />
                                <InvitesToUsername>
                                    {invite.toUser.username}
                                </InvitesToUsername>
                                <InvitesFromUser>
                                    Invited by:
                                    {' '}
                                    {invite.fromUser.username}
                                </InvitesFromUser>
                            </InvitesListItemDetails>
                            <Button
                                onClick={handleInviteCancel(invite.toUser.id)}
                                variant="outlined"
                            >
                                Cancel
                            </Button>
                        </InvitesUser>
                    )
                })}
            </PageHeader>
        </div>
    )
}

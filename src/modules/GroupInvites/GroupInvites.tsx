import {
    useMutation,
    useQuery,
} from '@apollo/client'
import { Button } from '@dvukovic/dujo-ui'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import {SectionHeader} from '../../components'

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
    GroupInvitesFromUser,
    GroupInvitesListItemDetails,
    GroupInvitesToUsername,
    GroupInvitesUser,
    GroupInvitesUserDetails,
    GroupInvitesUserImage,
} from './GroupInvites.styles'

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
            <SectionHeader title="Invites" />
            {nonGroupMembersData?.nonGroupMembers.map((user) => {
                return (
                    <GroupInvitesUser key={user.id}>
                        <GroupInvitesUserDetails>
                            <GroupInvitesUserImage
                                height={50}
                                src={user.imageURL}
                                width={50}
                            />
                            {user.username}
                        </GroupInvitesUserDetails>
                        <Button
                            onClick={handleInvite(user.id)}
                            variant="outlined"
                        >
                            Invite
                        </Button>
                    </GroupInvitesUser>
                )
            })}
            <SectionHeader title="Sent Invites">
                {groupInvitesData?.groupInvites.map((invite) => {
                    return (
                        <GroupInvitesUser key={invite.toUser.id + invite.fromUser.id}>
                            <GroupInvitesListItemDetails>
                                <GroupInvitesUserImage
                                    height={50}
                                    src={invite.toUser.imageURL}
                                    width={50}
                                />
                                <GroupInvitesToUsername>
                                    {invite.toUser.username}
                                </GroupInvitesToUsername>
                                <GroupInvitesFromUser>
                                    Invited by:
                                    {' '}
                                    {invite.fromUser.username}
                                </GroupInvitesFromUser>
                            </GroupInvitesListItemDetails>
                            <Button
                                onClick={handleInviteCancel(invite.toUser.id)}
                                variant="outlined"
                            >
                                Cancel
                            </Button>
                        </GroupInvitesUser>
                    )
                })}
        </div>
    )
}

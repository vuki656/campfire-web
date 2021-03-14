import {
    useMutation,
    useQuery,
} from '@apollo/client'
import { Button } from '@dvukovic/dujo-ui'

import { SectionHeader } from '../../components'
import { Invite } from '../../components/Invite'
import {
    ACCEPT_INVITE,
    DECLINE_INVITE,
} from '../../graphql/mutations'
import { USER_INVITES } from '../../graphql/queries'
import type {
    AcceptInviteMutation,
    AcceptInviteMutationVariables,
    DeclineInviteMutation,
    DeclineInviteMutationVariables,
    UserInvitesQuery,
} from '../../graphql/types'

export const UserInvites: React.FunctionComponent = () => {
    const { data } = useQuery<UserInvitesQuery>(USER_INVITES)

    const [acceptInviteMutation] = useMutation<AcceptInviteMutation, AcceptInviteMutationVariables>(ACCEPT_INVITE)
    const [declineInviteMutation] = useMutation<DeclineInviteMutation, DeclineInviteMutationVariables>(DECLINE_INVITE)

    // fixme: on accept, list of campfires is not updated for that user
    const handleInviteAccept = (groupId: string, inviteId: string) => () => {
        void acceptInviteMutation({
            refetchQueries: ['UserInvites', 'Groups'],
            variables: {
                input: {
                    groupId: groupId,
                    inviteId: inviteId,
                },
            },
        })
    }

    const handleInviteCancel = (inviteId: string) => () => {
        void declineInviteMutation({
            refetchQueries: ['UserInvites', 'GroupInvites'],
            variables: {
                input: {
                    inviteId: inviteId,
                },
            },
        })
    }

    return (
        <div>
            <SectionHeader title="Invites" />
            {data?.userInvites.length
                ? data?.userInvites.map((invite) => {
                    if (!invite.group?.id) {
                        return
                    }

                    return (
                        <Invite
                            action={(
                                <>
                                    <Button
                                        onClick={handleInviteAccept(invite.group?.id, invite.id)}
                                        variant="outlined"
                                    >
                                        Accept
                                    </Button>
                                    <Button
                                        onClick={handleInviteCancel(invite.id)}
                                        variant="outlined"
                                    >
                                        Decline
                                    </Button>
                                </>
                            )}
                            key={invite.id}
                            message={`Invited you to join ${invite.group?.name}`}
                            user={invite.fromUser}
                        />
                    )
                })
                : (
                    <p>
                        No invites yet.
                    </p>
                )}
        </div>
    )
}

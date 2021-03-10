import { useQuery } from '@apollo/client'

import { SectionHeader } from '../../components'
import { USER_INVITES } from '../../graphql/queries'
import type { UserInvitesQuery } from '../../graphql/types'

import { UserInvitesList } from './UserInvites.styles'

export const UserInvites: React.FunctionComponent = () => {
    const { data } = useQuery<UserInvitesQuery>(USER_INVITES)

    return (
        <div>
            <SectionHeader title="Invites" />
            <UserInvitesList>
                Invites
                {/* {data?.userInvites.map((invite) => { */}
                {/*     return ( */}
                {/*         <UserInvitesListItem key={invite.group.id + invite.fromUser.id}> */}
                {/*             `$ */}
                {/*             {invite.fromUser.username} */}
                {/*             {' '} */}
                {/*             has invited you to join $ */}
                {/*             {invite.group.name} */}
                {/*             ` */}
                {/*         </UserInvitesListItem> */}
                {/*     ) */}
                {/* })} */}
            </UserInvitesList>
        </div>
    )
}

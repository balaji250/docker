// / <reference types="cypress" />

import InviteUser from "./invite-user";

class AdministrationPage {

    inviteduser(inviteuserdata) {
        const invite = new InviteUser();
        invite.inviteUser(inviteuserdata);

    }
}
export default AdministrationPage
import type Account from "@/types/Account";

export async function getAccount(): Promise<Account> {
    return new Promise((res, rej) => {
        res({
            name: 'Marc Webber',
            email: 'marc@riot.com',
            avatar: '/avatar.png'
        });
    })
}
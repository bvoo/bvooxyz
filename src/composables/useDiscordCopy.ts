import { useClipboard } from '@vueuse/core';

export function useDiscordCopy() {
    const { copy, copied } = useClipboard({ source: 'bvoo' });

    function copyDiscord() {
        copy('bvoo');
    }

    return {
        copyDiscord,
        copied
    };
}

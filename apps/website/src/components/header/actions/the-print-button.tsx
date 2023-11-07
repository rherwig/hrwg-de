import { component$ } from '@builder.io/qwik';
import { TbPrinter } from '@qwikest/icons/tablericons';

import { Button } from '../../../ui';

export default component$(() => {
    return (
        <Button kind={'primary'}>
            <TbPrinter />
            <span>Print</span>
        </Button>
    );
});

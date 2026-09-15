import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { admission } from '@/routes';

export default function Admission() {
    return (
        <>
            <Head title="Admission" />
            <p>ADMISSION PAGE</p>
        </>
    );
}

Admission.layout = {
    breadcrumbs: [
        {
            title: 'Admission',
            href: admission(),
        },
    ],
};

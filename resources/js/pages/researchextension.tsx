import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { researchextension } from '@/routes';

export default function Researchextension() {
    return (
        <>
            <Head title="Research & Extension" />
            <p>RESEARCH & EXTENSION PAGE</p>
            
        </>
    );
}

Researchextension.layout = {
    breadcrumbs: [
        {
            title: 'Reasearch & Extension',
            href: researchextension(),
        },
    ],
};

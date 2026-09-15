import { Head } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { studentsalumni } from '@/routes';

export default function Studentsalumni() {
    return (
        <>
            <Head title="Students & Alumni" />
            <p>STUDENTS & ALUMNIN PAGE</p>
            
        </>
    );
}

Studentsalumni.layout = {
    breadcrumbs: [
        {
            title: 'Students & Alumni',
            href: studentsalumni(),
        },
    ],
};

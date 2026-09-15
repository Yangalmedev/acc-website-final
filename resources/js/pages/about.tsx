import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { about } from '@/routes';

export default function About() {
    return (
        <>
            <Head title="About" />
            
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/* <p>ABOUT ABUYOG COMMUNITY COLLEGE </p> */}

            {/* FIRST DEVISION (Mother devision) */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* child division box1 */}
                    
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">

                        <PlaceholderPattern className="absolute inset-0 size-full" />

                        <div className="relative z-10 flex h-full flex-col items-center justify-center p-6">
                            <img 
                                src="https://accabuyog.com/home/wp-content/uploads/2023/02/ACC-logo-1-5.png" 
                                alt="ACC logo" 
                                className="mb-4 h-10 w-40 rounded-full object-cover md:h-44 md:w-44" 
                            />

                            <h3 className="text-center text-lg font-bold tracking-tight">
                                ACC Official Seal
                            </h3>
                            <p className="mt-1 text-center text-sm text-muted-foreground">
                                Abuyog Community College
                            </p>

                        </div>
                    </div>

                    {/* child division box2 */}
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                        <PlaceholderPattern className="absolute inset-0 size-full" />

                        <div className="relatice z-10 flex h-full flex-col items-center justify-center p-6">
                            <img 
                                src="https://accabuyog.com/home/wp-content/themes/gwt-wordpress-26.0.0/images/transparency-seal-160x160.png" alt="ACC logo" 
                                className="mb-4 h-40 w-40 rounded-full object-cover md:h-44 md:w-44" />

                            <h3 className='text-center text-lg font-bold tracking-tight '>
                                Transparency Seal
                            </h3>
                            <p className='mt-1 text-center text-sm text-muted-foreground'>
                                Government Transeparency Seal
                            </p>
                        </div>
                    </div>
                    
                    {/* child division box3 */}
                    <div className="relative overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">

                        <PlaceholderPattern className="absolute inset-0 size-full" />

                        <div className='relative z-10 flex height-full flex-col items-center justify-center p-6'>
                            <img 
                                src="https://accabuyog.com/home/wp-content/themes/gwt-wordpress-26.0.0/images/foi-logo-160x160.png" 
                                alt="ACC logo" 
                                className="mb-4 h-40 w-40 rounded-full object-cover md:h-44 md:w-44"
                            />
                            <h3 className='text-center text-lg font-bold tracking-tight'>
                                Freedown of Infromation
                            </h3>
                            <p className='mt-1 text-center text-sm text-muted-foreground'>
                                FOI Philippines
                            </p>
                        </div>
                    </div>
                </div>
            {/* END OF FIRST DEVISION (Mother devision) */}

                <div className="relative min-h-[100vh] flex-1 rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-2">
                        
                        <div className="my-box flex justify-center items-center h-auto relative aspect-video rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                            <div className='p-8'>
                                <div>
                                    <h1 className='text-2xl font-bold tracking-type'> ACC Official Seal </h1>
                                </div>

                                <div>
                                     <p className=' space-y-4 text-sm tracking-type text-muted-foreground text-justify py-4' >
                                    Since its founding on 1979, <strong className='text-foreground'>Abuyog Community College</strong> has striven to provide students the knowledge, values, skills, and community involvement to enable them to excel as the forefront manpower of community and of the global arena. ACC aims for the creation of a scholastic environment composed of individuals that are grounded in faith, integrity, respect and trust. 
                            
                                    </p>
                                </div>
                                <div>
                                    <p className=' space-y-4 text-sm tracking-type text-muted-foreground text-justify py-4'>
                                    With today’s fast-paced global progress, ACC promotes and fosters the acquisition of attributes that will empower students to triumph against ignorance and mediocrity and contribute positively to nation building.
                                </p>
                                </div>
                                <div className='space-y-4'>
                                    <h3 className='text-xl' font-semibold>
                                        The School LOGO:
                                    </h3>

                                    <ul className='space-y-4 text-sm leading-7 text-muted-foreground'>
                                        <li>
                                            <strong className='text-foreground'>Laurel Wreath (Green)</strong> – a symbol of victory and honor. It symbolizes ACC’s triumph against ignorance and success in the search for truth and knowledge.
                                        </li>
                                        <li>
                                            <strong className='text-foreground'>Torch</strong> – an emblem of enlightenment and hope. It symbolizes the vision of ACC to provide light as a source of enlightenment to all students.
                                        </li>
                                        <li>
                                            <strong className='text-foreground'>Scrolls</strong> – an emblem of wisdom. It symbolizes translating academic work into meaningful presentations of expertise and scholarly work.
                                        </li>
                                        <li>
                                            <strong className='text-foreground'>Quill Pen and Ink</strong> – an instrument for writing which symbolizes freedom and independence to soar and be able to look at things from a wider perspective.
                                        </li>
                                        <li>
                                            <strong className='text-foreground'>Bee</strong> – symbol for the Municipality of Abuyog, and;
                                        </li>
                                        <li>
                                            <strong className='text-foreground'>1997 </strong> the year the college was established.
                                        </li>
                                    </ul>
                    
                                </div>
                            </div>
                        </div>

                        {/* VIDEO */}
                        <div className='space-y-6'> 

                            {/* 1st video */}
                            <div className="overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">

                                <div className='border-bold border-sidebar-border/70 px-5 py-4 dark:border-sidebar-border'>

                                    <h3 className='text-lg font-semibold'>
                                        About Abuyog Community College
                                    </h3>
                                    <p className='mt-1 text-sm text-muted-foreground'>
                                        Learn more about ACC and it's mission.
                                    </p>

                                </div>

                                <div className='relative aspect-video'>

                                    <iframe 
                                    className='absolute inset-0 w-full h-full z-10' 
                                    src="https://www.youtube.com/embed/_dHiZW9oDdw" 
                                    title='ACC Video' 
                                    allow=' accelerometer; autoplay;  encrypted-media; web-share; clipboard-write; gyroscope; picture-in-picture;' 
                                    allowFullScreen
                                    />

                                </div>
                            </div>
                            {/* end of 1st video */}
                            
                            
                            {/* 2nd video */}
                            <div className="overflow-hidden rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">

                                <div className='border-bold border-sidebar-border/70 px-5 py-4 dark:border-sidebar-border'>
                                    <h3 className='text-lg font-semibold'>
                                        About Abuyog Community College
                                    </h3>
                                    <p className='mt-1 text-sm text-muted-foreground'>
                                        Learn more about ACC and it's mission.
                                    </p>
                                </div>
                                
                                <div className='relative aspect-video'>
                                    <iframe 
                                    className='absolute inset-0 w-full h-full z-10' 
                                    src="https://www.youtube.com/embed/mCBtWIoT8ts?list=RDmCBtWIoT8ts" 
                                    title='ACC Video' 
                                    allow='accelerometer; autoplay; encrypted-media; web-share; clipboard-write; gyroscope; picture-in-picture;' 
                                    allowFullScreen
                                    />
                                </div>

                            </div>
                            {/* end of 2nd video */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

About.layout = {
    breadcrumbs: [
        {
            title: 'About',
            href: about(),
        },
    ],
};

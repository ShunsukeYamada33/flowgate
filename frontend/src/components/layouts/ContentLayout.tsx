import * as React from 'react';

import {Head} from '@/components/seo/Head'

type ContentLayoutProps = {
    children: React.ReactNode;
    title: string;
};

export const ContentLayout = ({children, title}: ContentLayoutProps) => {
    return (
        <>
            <Head title={title}/>
            <div>
                <div>
                    <h2>
                        {title}
                    </h2>
                </div>

                <div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};
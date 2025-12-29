import {Head} from '@/components/seo/Head'
import * as React from "react";

type LayoutProps = {
    children: React.ReactNode;
    title: string;
};


export const AuthLayout = ({children, title}: LayoutProps) => {

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
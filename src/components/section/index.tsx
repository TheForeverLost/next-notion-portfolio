import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    title?: string;
    className?: string;
};

export const Section: React.FC<Props> = ({
    children,
    title = "",
    className = "",
}: Props) => {
    return (
        <section
            id={title}
            className={`flex w-full snap-y snap-proximity snap-center flex-col ${className}`}
        >
            {children}
        </section>
    );
};

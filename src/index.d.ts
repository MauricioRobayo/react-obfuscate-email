import { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
declare type Props = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
    body?: string;
    children?: ReactNode;
    className?: string;
    email: string;
    subject?: string;
};
export declare function Email({ body, subject, children, className, email, ...rest }: Props): JSX.Element;
export {};

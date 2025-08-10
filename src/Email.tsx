"use client";

import {
	type ComponentPropsWithRef,
	forwardRef,
	type ReactNode,
	useId,
	useState,
} from "react";
import { percentEncodeParams } from "./utils";

export interface EmailProps extends ComponentPropsWithRef<"a"> {
	/** blind carbon copy e-mail addresses */
	bcc?: string[];
	/** body of e-mail */
	body?: string;
	/** carbon copy e-mail addresses */
	cc?: string[];
	children?: ReactNode;
	/** e-mail recipient address */
	email: string;
	/** subject of e-mail */
	subject?: string;
}
export const Email = forwardRef<HTMLAnchorElement, EmailProps>(
	(
		{ bcc = [], body = "", cc = [], children, email, subject = "", ...props },
		ref,
	) => {
		const [hovered, setHovered] = useState(false);
		const emailUrl = new URL(`mailto:${email}`);

		// https://github.com/whatwg/url/issues/18#issuecomment-369865339
		emailUrl.search = percentEncodeParams({ bcc, body, cc, subject });

		function handleHover() {
			setHovered(true);
		}

		const displayText = children ?? email;
		const obfuscatedText = children ?? <ObfuscateEmail email={email} />;

		return (
			<a
				ref={ref}
				href={hovered ? emailUrl.href : "#"}
				onFocus={handleHover}
				onMouseOver={handleHover}
				{...props}
			>
				{hovered ? displayText : obfuscatedText}
			</a>
		);
	},
);

function ObfuscateEmail({ email }: { email: string }) {
	const id = useId();
	const [username, domain] = email.split("@");
	return (
		<>
			<style>
				{`
					#${id}::after {
						content: "@";
					}
				`}
			</style>
			{username}
			<span id={id} />
			{domain}
		</>
	);
}

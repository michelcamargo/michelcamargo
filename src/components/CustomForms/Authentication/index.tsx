import React, { useCallback, useMemo, useState } from 'react';

import AuthHandshakeForm from "@/components/CustomForms/Authentication/Handshake.form";
import AuthSignInForm from "@/components/CustomForms/Authentication/SignIn.form";
import AuthSignUpForm from "@/components/CustomForms/Authentication/SignUp.form";
import { useRouter } from "next/router";

import Styled from './styles';

// eslint-disable-next-line no-unused-vars
enum AUTH_STEPS {
	// eslint-disable-next-line no-unused-vars
	handshake,
	// eslint-disable-next-line no-unused-vars
	sign_in,
	// eslint-disable-next-line no-unused-vars
	sign_up
}

const AuthenticationForm = () => {
	const router = useRouter();
	
	const [step, setStep] = useState<AUTH_STEPS>(AUTH_STEPS.handshake);
	const [userName, setUserName] = useState<string>('');
	
	const signInHandler = useCallback((token: string) => {
		router.push(`/auth/redirect?key=pb-dashboard&token=${token}`);
	}, [router]);
	
	/* eslint-disable-next-line  @typescript-eslint/no-explicit-any */
	const signUpHandler = useCallback((response: any) => {
		console.warn({ response });
	}, []);
	
	const handshakeHandler = useCallback((isExistingUser: boolean, username: string) => {
		if (!isExistingUser) setStep(AUTH_STEPS.sign_up);
		else {
			setUserName(username);
			setStep(AUTH_STEPS.sign_in);
		}
	}, [setStep]);
	
	const CurrentForm = useMemo(() => ([
		() => AuthHandshakeForm({ submitHandler: handshakeHandler }),
		() => AuthSignInForm({ submitHandler: signInHandler, username: userName }),
		() => AuthSignUpForm({ submitHandler: signUpHandler }),
	][step]
	), [handshakeHandler, signInHandler, signUpHandler, step, userName]);
	
	return (
		<Styled.FormWrapper>
			<CurrentForm />
		</Styled.FormWrapper>
	);
};

export default AuthenticationForm;

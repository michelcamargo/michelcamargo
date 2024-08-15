import React, {useCallback, useMemo, useState} from 'react';
import AuthHandshakeForm from "@/components/CustomForms/Authentication/Handshake.form";
import AuthSignInForm from "@/components/CustomForms/Authentication/SignIn.form";
import AuthSignUpForm from "@/components/CustomForms/Authentication/SignUp.form";
import { useRouter } from "next/router";
import Styled from './styles';

enum AUTH_STEPS {
	handshake,
	sign_in,
	sign_up
}

const AuthenticationForm = () => {
	const router = useRouter();
	
	const [step, setStep] = useState<AUTH_STEPS>(AUTH_STEPS.handshake);
	const [userName, setUserName] = useState<string>('');
	
	const signInHandler = useCallback((token: string) => {
		router.push(`/auth/redirect?key=pb-dashboard&token=${token}`);
	}, [setStep, AUTH_STEPS]);
	
	const signUpHandler = useCallback((response: any) => {
		console.log({response})
	}, [setStep, AUTH_STEPS]);
	
	const handshakeHandler = useCallback((isExistingUser: boolean, username: string) => {
		if (!isExistingUser) setStep(AUTH_STEPS.sign_up);
		else {
			setUserName(username);
			setStep(AUTH_STEPS.sign_in)
		}
	}, [setStep, AUTH_STEPS]);
	
	const CurrentForm = useMemo(() => ([
		() => AuthHandshakeForm({ submitHandler: handshakeHandler }),
		() => AuthSignInForm({ submitHandler: signInHandler, username: userName }),
		() => AuthSignUpForm({ submitHandler: signUpHandler}),
  ][step]
	), [step, userName]);
	
	return (
		<Styled.FormWrapper>
			<CurrentForm />
		</Styled.FormWrapper>
	);
};

export default AuthenticationForm;

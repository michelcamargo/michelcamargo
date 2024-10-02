import React, { ReactNode, useCallback } from 'react';

import CustomButton from "@/components/CustomButton";
import Styled from "@/components/CustomForms/Contact/styles";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props<T> {
	children: ReactNode,
	currentIndex: number,
	// eslint-disable-next-line no-unused-vars
	stepChanger: (step: number) => void,
	availableSteps: Array<T>
}

const FormStepper = <T,>({ children, currentIndex, stepChanger, availableSteps }: Props<T>) => {
	const goFowardHandler = useCallback(() => {
		// const nextStep = availableSteps[(Number(currentIndex) + 1)] as T;
		stepChanger(currentIndex + 1);
	// }, [stepChanger, availableSteps, currentIndex]);
	}, [stepChanger, currentIndex]);
	
	const goBackHandler = useCallback(() => {
		// const previousStep = availableSteps[Number(currentIndex) - 1] as T;
		stepChanger(currentIndex - 1);
	// }, [stepChanger, availableSteps, currentIndex]);
	}, [stepChanger, currentIndex]);
	
	return (
		<>
			{children}
			<Styled.FormActionPanel>
				{ currentIndex > 0 && (
					<CustomButton
						callback={goBackHandler}
						beforeIcon={<ArrowBackIosIcon />}
					>
						Voltar
					</CustomButton>)
				}
				{ currentIndex < availableSteps.length - 1
					? (
						<CustomButton
							afterIcon={<ArrowForwardIosIcon />}
							callback={goFowardHandler}
							bold="true"
						>
							{'Continuar'}
						</CustomButton>
					) : (
						<>
							<CustomButton
								type="submit"
								bold="true"
							>
								{'Enviar'}
							</CustomButton>
						</>
					)
				}
			</Styled.FormActionPanel>
		</>
  
	);
};

export default FormStepper;

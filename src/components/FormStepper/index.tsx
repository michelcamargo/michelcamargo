import React, {ReactNode, useCallback} from 'react';

import Styled from "@/components/CustomForms/Contact/styles";
import CustomButton from "@/components/CustomButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props<T> {
	children: ReactNode,
	currentIndex: number,
	stepChanger: (step: number) => void,
	availableSteps: Array<T>
}

const FormStepper = <T,>({ children, currentIndex, stepChanger, availableSteps }: Props<T>) => {
	
	const goFowardHandler = useCallback(() => {
		// const nextStep = availableSteps[(Number(currentIndex) + 1)] as T;
		stepChanger(currentIndex + 1)
	}, [stepChanger, availableSteps, currentIndex])
	
	const goBackHandler = useCallback(() => {
		// const previousStep = availableSteps[Number(currentIndex) - 1] as T;
		stepChanger(currentIndex - 1)
	}, [stepChanger, availableSteps, currentIndex])
	
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
              bold
            >
              {'Continuar'}
            </CustomButton>
          ) : (
            <>
              <CustomButton
                type="submit"
                bold
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

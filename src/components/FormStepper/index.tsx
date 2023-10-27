import React, { ReactNode } from 'react';

import Styled from "@/components/ContactForm/styles";
import CustomButton from "@/components/CustomButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

interface Props<T> {
	children: ReactNode,
	currentStep: T,
	stepChanger: (step: T) => void,
	availableSteps: Array<T>
}

const FormStepper = <T,>({ children, currentStep, stepChanger, availableSteps }: Props<T>) => {
  return (
    <>
      {children}
      <Styled.FormActionPanel>
        { currentStep !== availableSteps[0] && (
          <CustomButton
            callback={() => stepChanger(availableSteps[Number(currentStep) - 1] as T)}
            beforeIcon={<ArrowBackIosIcon />}
          >
            Voltar
          </CustomButton>)
        }
        { currentStep !== availableSteps[availableSteps.length - 1]
          ? (
            <CustomButton
              afterIcon={<ArrowForwardIosIcon />}
              callback={() => stepChanger(availableSteps[(Number(currentStep) + 1)] as T)}
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

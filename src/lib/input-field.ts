import { ChangeEventHandler, FocusEventHandler, ReactNode } from "react";

export type CommonInputProps = {
  id: string,
	name: string,
  type?: 'text' | 'number' | 'email',
  label?: string,
  icon?: ReactNode,
  onChange: ChangeEventHandler
  placeholder?: string,
  isDisabled?: boolean,
  maxLength?: number,
  height?: number,
  onBlur?: FocusEventHandler,
  width?: number,
  fullWidth?: boolean,
  value?: string | number,
}

import { clsx } from 'clsx'
import { InputHTMLAttributes } from 'react';

import { Slot } from '@radix-ui/react-slot';

export interface TextInputRootProps {
  children: React.ReactNode
}

function TextInputRoot({ children }: TextInputRootProps){
  return (
    <div className='flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300'>
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputIconProps {
  children: React.ReactNode
}


function TextInputIcon({children}: TextInputIconProps){
  return (
    <Slot className='w-6 h-6 text-gray-400'>
      {children}
    </Slot>
  );
}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput( props: TextInputInputProps) {

  return (
    <input
      className='bg-transparent flex-1 text-gray-100 text-xs outline-none placeholder:text-gray-400'
      {...props}
    />
  );
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon
}


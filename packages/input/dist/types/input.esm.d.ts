import React from 'react';
interface InputSimpleProps {
    labelInput: string;
    maxLength: number;
    value: string;
    disabled: boolean;
    placeholder: string;
    type?: string;
    onChange: (...args: unknown[]) => void;
    onKeyDown: (...args: unknown[]) => void;
}
declare const InputSimple: React.FC<InputSimpleProps>;
export { InputSimple as default, InputSimpleProps };
//# sourceMappingURL=input.esm.d.ts.map
import React from 'react';
interface Buttons_SCProps {
    className?: string;
    show: [boolean, boolean];
    disableMessage?: boolean;
    cleanMessage?: string;
    handleCancel?: (...args: any[]) => any;
    generateMessage?: string;
    disableGenerate?: boolean;
    querySickLeaves?: (...args: any[]) => any;
}
declare const Buttons: React.FC<Buttons_SCProps>;
export { Buttons_SCProps, Buttons };
//# sourceMappingURL=buttons.cjs.d.ts.map
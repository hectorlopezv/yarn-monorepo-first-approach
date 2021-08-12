import { Component } from 'react';
interface IToolTipc_SCProps {
    text: string;
    icon: string;
    className?: string;
    isMobile: boolean;
}
interface stateTypes {
    show: boolean;
}
declare class ToolTipc extends Component<IToolTipc_SCProps> {
    target: any;
    constructor(props: any);
    state: stateTypes;
    handleClick(e: any): void;
    render(): JSX.Element;
}
export { IToolTipc_SCProps, ToolTipc };
//# sourceMappingURL=tooltip.cjs.d.ts.map
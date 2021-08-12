import React from 'react';
interface IModalMessageProps {
    show: boolean;
    showModal?: boolean;
    container?: any;
    MessageTitle: string;
    icStyles?: string;
    IconoColor?: string;
    Icono: JSX.Element;
    buttonsZone?: JSX.Element;
    msg: string;
    MainButtonText: string;
    buttonsZoneStyle?: any;
    getModalData?: (...args: any[]) => any;
    CloseAction: (...args: any[]) => any;
    AltButtonAction?: (...args: any[]) => any;
    MainButtonAction?: (...args: any[]) => any;
}
interface stateTyp {
    showModal: boolean;
}
declare class ModalMessage extends React.Component<IModalMessageProps> {
    state: stateTyp;
    handleHide(e: any, callback?: (...args: any[]) => any): null;
    static getDerivedStateFromProps(props: any, _state: any): any;
    handleShow: () => void;
    componentDidUpdate(prevPros: any, _: any): void;
    render(): JSX.Element;
}
export { IModalMessageProps, stateTyp, ModalMessage };
//# sourceMappingURL=message.esm.d.ts.map
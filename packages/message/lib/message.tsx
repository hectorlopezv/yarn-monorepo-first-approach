import React from "react"; //llamado para creacion de componentes
import { Modal, Button } from "react-bootstrap"; //llamado para creacion de componentes de Bootstrap
import "./styles.scss";

export interface IModalMessageProps {
  show: boolean;
  showModal?: boolean;
  container?: any; //this
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
export interface stateTyp {
  showModal: boolean;
}
export class ModalMessage extends React.Component<IModalMessageProps> {
  state: stateTyp = {
    showModal: false,
  };
  handleHide (e: any, callback?: (...args: any[]) => any    )  {
    e.preventDefault();
    this.setState({ showModal: false }, callback ? callback() : null);
    return null;
  };
  static getDerivedStateFromProps(props:any, _state:any): any {
    return {
      showModal: props.show,
      // ... other derived state properties
    };
  }
  handleShow = () => {
    this.setState({ showModal: true });
  };
  componentDidUpdate(prevPros: any, _: any) {
    if (this.props.show !== prevPros.show) {
      this.setState({ showModal: this.props.show });
    }
  }
   render() {
    const  params:any = this.props.getModalData ? this.props.getModalData() : {};
    return (
      <div id="modal-wrap-alert-modal">
        <div className="modal-container">
          <Modal
            show={this.state.showModal}
            container={this.props.container}
            onHide={this.handleHide.bind(this)}
            bsSize="large"
            backdrop="static"
            aria-labelledby="contained-modal-title-lg"
            className="ModalMessage__container"
          >
            <Modal.Header>
              <Modal.Title>
                <div className="ModalMessage__title">
                  {this.props.MessageTitle}
                </div>
              </Modal.Title>
              <Button
                className={`ModalMessage__ic ${
                  this.props.icStyles ? this.props.icStyles : ""
                }`}
                onClick={(e) => this.handleHide(e, this.props.CloseAction)}
              >
                <i className="fa fa-times"></i>
              </Button>
            </Modal.Header>
            <Modal.Body>
              <div className="col-xs-12 col-sm-12 ModalMessage__content">
                <div
                  className={`col-xs-12 col-sm-2 ModalMessage__icMain ${
                    this.props.IconoColor
                      ? `ModalMessage__icMain${this.props.IconoColor}`
                      : ""
                  }`}
                >
                  {this.props.Icono}
                </div>
                <div className="col-xs-12 col-sm-10 ModalMessage__message">
                  <div className="col-xs-12 pl-0 pr-0">
                    {this.props.msg || params.messageModal}
                  </div>
                  {this.props.buttonsZone ? (
                    <div
                      className="col-xs-12 pl-0 pr-0"
                      style={this.props.buttonsZoneStyle}
                    >
                      {this.props.buttonsZone}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="clearfix">
                {this.props.AltButtonAction && this.props.MainButtonText ? (
                  <Button
                    className={"ModalMessage__btn btn btn-default"}
                    onClick={(e) =>
                      this.handleHide(e, this.props.AltButtonAction)
                    }
                  >
                    {this.props.MainButtonText}
                  </Button>
                ) : (
                  <></>
                )}
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}

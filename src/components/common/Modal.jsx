import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal as AntModal, Button } from 'antd';

class Modal extends PureComponent {
  static propTypes = {
    handleOk: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    skipConfirm: PropTypes.bool,
    outputRender: PropTypes.func.isRequired,
  };

  static defaultProps = {
    skipConfirm: false,
  };

  state = { visible: false };

  showModal = () => this.setState({ visible: true });

  handleCancel = () => this.setState({ visible: false });

  handleOk = () => {
    const { handleOk } = this.props;

    if (handleOk) {
      handleOk();
    }

    this.handleCancel();
  };

  renderModal() {
    const { children, skipConfirm, ...props } = this.props;

    if (skipConfirm) {
      props.footer = [<Button onClick={this.handleCancel}>{props.cancelText || '返回'}</Button>];
    }
    return (
      <AntModal {...this.state} {...props} onOk={this.handleOk} onCancel={this.handleCancel}>
        {children}
      </AntModal>
    );
  }

  render() {
    const { outputRender } = this.props;
    return (
      <Fragment>
        {outputRender({ onClick: this.showModal })}
        {this.renderModal()}
      </Fragment>
    );
  }
}

export default Modal;

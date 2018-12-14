import React, { PureComponent, Fragment } from 'react';
import { Modal as AntModal, Button } from 'antd';

class Modal extends PureComponent {
	state = { visible: false };

	showModal = () => this.setState({ visible: true });

	handleCancel = () => this.setState({ visible: false });

	handleOk = () => {
		if (this.props.handleOk) {
			this.props.handleOk();
		}

		this.handleCancel();
	}

	renderModal() {
		const { children, skipConfirm, ...props } = this.props;

		if (skipConfirm) {
			props.footer = [
				<Button onClick={this.handleCancel}>{props.cancelText || '返回'}</Button>
			]
		}
		return (
			<AntModal
				visible={this.state.visible}
				onOk={this.handleOk}
				onCancel={this.handleCancel}
				{...props}
			>
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

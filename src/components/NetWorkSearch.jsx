import React, { PureComponent, Fragment } from 'react';
import { Form, Row, Col, Input, Button, TreeSelect, Select } from 'antd';

import RowContainer from './common/RowContainer';
import Map from './Map';
import regions from '../constants/hongKongRegion';
import specialties from '../constants/specialty';

import PARTNER_LIST from '../constants/partnerList';
const FormItem = Form.Item;

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

class NetWorkSearch extends PureComponent {
	state= { partners: PARTNER_LIST };

	// filterPartnerList = ({region, name, specialty})

	getFields() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Fragment>
				<Col {...{ xs: 24, sm: 24, md: 24, lg: 24 }} key="region">
					<FormItem label="地區">
						{getFieldDecorator('region', { rules: [{ required: false }] })(
							<TreeSelect
								showSearch
								treeData={regions}
								treeCheckable
								showCheckedStrategy={SHOW_PARENT}
								searchPlaceholder="選擇地區"
							/>
						)}
					</FormItem>
				</Col>
				<Col {...{ xs: 24, sm: 24, md: 24, lg: 24 }} key="practitioner">
					<FormItem label="醫生姓名">
						{getFieldDecorator('name', { rules: [{ required: false }] })(
							<Input placeholder="輸入醫生姓名" />
						)}
					</FormItem>
				</Col>
				<Col {...{ xs: 24, sm: 24, md: 24, lg: 24 }} key="specialty">
					<FormItem label="專科">
						{getFieldDecorator('specialty', { rules: [{ required: false }] })(
							<Select showSearch placeholder="選擇專科">
								{specialties.map(({ label, value }) => (
									<Select.Option mode="multiple" key={value} value={value}>
										{label}
									</Select.Option>
								))}
							</Select>
						)}
					</FormItem>
				</Col>
			</Fragment>
		);
	}

	handleSearch = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			console.log('Received values of form: ', values);
		});
	};

	handleReset = () => {
		this.props.form.resetFields();
	};

	render() {
		const { className, id } = this.props;
		const classSets = `network ${className}`;
		return (
			<div className={classSets} id={id}>
				<h2>中醫網絡</h2>
				<RowContainer gutter={16}>
					<Col {...{ xs: 24, sm: 24, md: 12, lg: 12 }} className="network__form">
						<Form onSubmit={this.handleSearch}>
							<Row gutter={24}>{this.getFields()}</Row>
							<Row>
								<Col span={24} style={{ textAlign: 'right' }}>
									<Button type="primary" htmlType="submit">
										搜尋
									</Button>
									<Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
										清空
									</Button>
								</Col>
							</Row>
						</Form>
					</Col>
					<Col {...{ xs: 24, sm: 24, md: 12, lg: 12 }}>
					  <Map mapTypeControl={false} fullscreenControl={false} />
					</Col>
				</RowContainer>
			</div>
		);
	}
}

export default Form.create()(NetWorkSearch);

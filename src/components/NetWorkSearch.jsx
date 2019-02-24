import React, { Component } from 'react';
import { Form, Row, Col, Input, Button, TreeSelect, Select, message } from 'antd';
import InViewMonitor from 'react-inview-monitor';
import { Marker, InfoWindow } from 'google-maps-react';
import _flatten from 'lodash/flatten';
import _get from 'lodash/get';

import Map from './Map';
import regions from '../constants/hongKongRegion';
import specialties from '../constants/specialty';

import PARTNER_LIST from '../constants/partnerList';

const FormItem = Form.Item;

const { SHOW_PARENT } = TreeSelect;
class NetWorkSearch extends Component {
  state = {
    partners: PARTNER_LIST,
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
  };

  getFields() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInDown">
        <Col {...{ xs: 24, sm: 24, md: 24, lg: 24 }} key="region">
          <FormItem label="地區">
            {getFieldDecorator('regions', { rules: [{ required: false }] })(
              <TreeSelect
                showSearch
                treeData={regions}
                treeCheckable
                showCheckedStrategy={SHOW_PARENT}
                searchPlaceholder="選擇地區"
              />,
            )}
          </FormItem>
        </Col>
        <Col {...{ xs: 24, sm: 24, md: 24, lg: 24 }} key="practitioner">
          <FormItem label="醫生姓名">
            {getFieldDecorator('name', { rules: [{ required: false }] })(
              <Input placeholder="輸入醫生姓名" />,
            )}
          </FormItem>
        </Col>
        <Col {...{ xs: 24, sm: 24, md: 24, lg: 24 }} key="specialty">
          <FormItem label="專科">
            {getFieldDecorator('specialty', { rules: [{ required: false }] })(
              <Select showSearch placeholder="選擇專科">
                {specialties.map(({ label, value }) => (
                  <Select.Option mode="multiple" key={label} value={value}>
                    {label}
                  </Select.Option>
                ))}
              </Select>,
            )}
          </FormItem>
        </Col>
      </InViewMonitor>
    );
  }

  filterPartnerList = ({
    regions: selectedRegions = [],
    name: selectedName = '',
    specialty: selectedSpecialty = 'any',
  }) => PARTNER_LIST.filter(({ name, address: { region }, specialties }) => {
    // Check name
    const nameRegex = new RegExp(selectedName.toLowerCase(), 'g');
    if (!nameRegex.test(name)) {
      return false;
    }

    // check region
    const flattenedRegions = _flatten(selectedRegions);
    if (
      flattenedRegions.length > 0
        && !flattenedRegions.find(selectedRegion => selectedRegion === region)
    ) {
      return false;
    }

    // check specialty
    if (
      selectedSpecialty !== 'any'
        && !specialties.find(specialty => specialty === selectedSpecialty)
    ) {
      return false;
    }

    return true;
  });

  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const filteredPartners = this.filterPartnerList(values);
      message
        .loading('正在搜尋中醫合作夥伴...', 1.25)
        .then(() => {
          if (filteredPartners.length > 0) {
            message.success(`搜尋成功, 有${filteredPartners.length}位匹配的中醫合作夥伴`, 2.5);
            return;
          }

          message.warning('對不起，沒有匹配的中醫合作夥伴，請再嘗試', 2.5);
        })
        .then(() => this.setState({ ...this.state, partners: filteredPartners }));
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  onMarkerClick = (props, marker) => this.setState({
    ...this.state,
    activeMarker: marker,
    selectedPlace: props,
    showingInfoWindow: true,
  });

  onInfoWindowClose = () => this.setState({
    ...this.state,
    activeMarker: null,
    showingInfoWindow: false,
  });

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        ...this.state,
        activeMarker: null,
        showingInfoWindow: false,
      });
    }
  };

  renderMap() {
    const { partners, selectedPlace, activeMarker, showingInfoWindow } = this.state;
    return (
      <Col {...{ xs: 24, sm: 24, md: 24, lg: 12 }}>
        <Map mapTypeControl={false} fullscreenControl={false}>
          {partners.map((partner) => {
            const {
              name,
              address: { lat, lng },
            } = partner;
            return (
              <Marker
                key={name}
                position={{ lat, lng }}
                name={name}
                info={partner}
                onClick={this.onMarkerClick}
              />
            );
          })}
          <InfoWindow
            marker={activeMarker}
            onClose={this.onInfoWindowClose}
            visible={showingInfoWindow}
          >
            <div style={{ maxWidth: '20rem', width: '20rem' }}>
              {/* <GoogleStreetImage {...streetImageProps} /> */}
              <p className="section__label">名稱</p>
              <p className="section__paragraph">{_get(selectedPlace, 'info.name', 'N/A')}</p>
              <p className="section__label">地址</p>
              <p className="section__paragraph">
                {_get(selectedPlace, 'info.address.fullAddress', 'N/A')}
              </p>
              <p className="section__label">電話</p>
              <p className="section__paragraph">
                {_get(selectedPlace, 'info.otherInfo.tel', 'N/A')}
              </p>
            </div>
          </InfoWindow>
        </Map>
      </Col>
    );
  }

  renderForm() {
    return (
      <Col {...{ xs: 24, sm: 24, md: 24, lg: 12 }} className="network__form">
        <p className="section__paragraph">
          我們正致力尋找合作夥伴，若你想享用我們的服務，可在此搜尋你家附近的「藥莊」合作夥伴。
        </p>
        <Form onSubmit={this.handleSearch}>
          <Row gutter={24}>{this.getFields()}</Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right', marginBottom: '1rem' }}>
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
    );
  }

  render() {
    const { className, id } = this.props;
    const classSets = `network ${className}`;
    return (
      <div className={classSets} id={id}>
        <h2 className="section__header">中醫網絡</h2>
        <Row gutter={16}>
          {this.renderForm()}
          {this.renderMap()}
        </Row>
      </div>
    );
  }
}

export default Form.create()(NetWorkSearch);

import React, { Component, Fragment } from 'react';
import { Form, Row, Col, Input, Button, TreeSelect, Select } from 'antd';
import { Marker, InfoWindow } from 'google-maps-react';
import _flatten from 'lodash/flatten';
import _get from 'lodash/get';

import RowContainer from './common/RowContainer';
import GoogleStreetImage from './common/GoolgeStreetImage';
import Map from './Map';
import regions from '../constants/hongKongRegion';
import specialties from '../constants/specialty';

import PARTNER_LIST from '../constants/partnerList';
const FormItem = Form.Item;

const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const GOOGLE_MAP_API_KEY = process.env.GATSBY_GOOGLE_MAP_API_KEY;
class NetWorkSearch extends Component {
  state = {
    partners: PARTNER_LIST,
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
  };

  filterPartnerList = ({
    regions: selectedRegions = [],
    name: selectedName = '',
    specialty: selectedSpecialty = 'any',
  }) => {
    return PARTNER_LIST.filter(({ name, address: { region }, specialties }) => {
      // Check name
      const nameRegex = new RegExp(selectedName.toLowerCase(), 'g');
      if (!nameRegex.test(name)) {
        return false;
      }

      // check region
      const flattenedRegions = _flatten(selectedRegions);
      if (!flattenedRegions.find(selectedRegion => selectedRegion === region)) {
        return false;
      }

      // check specialty
      if (
        selectedSpecialty !== 'any' &&
        !specialties.find(specialty => specialty === selectedSpecialty)
      ) {
        return false;
      }

      return true;
    });
  };

  getFields() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
        <Col {...{ xs: 24, sm: 24, md: 24, lg: 24 }} key="region">
          <FormItem label="地區">
            {getFieldDecorator('regions', { rules: [{ required: false }] })(
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
                  <Select.Option mode="multiple" key={label} value={value}>
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
      const filteredPartners = this.filterPartnerList(values);
      this.setState({ ...this.state, partners: filteredPartners });
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      ...this.state,
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true,
    });

  onInfoWindowClose = () =>
    this.setState({
      ...this.state,
      activeMarker: null,
      showingInfoWindow: false,
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        ...this.state,
        activeMarker: null,
        showingInfoWindow: false,
      });
  };

  renderMap() {
    const {
      partners,
      selectedPlace,
      activeMarker,
      showingInfoWindow,
    } = this.state;
    // const streetImageProps = {
    //   lat: _get(selectedPlace, 'position.lat'),
    //   lng: _get(selectedPlace, 'position.lng'),
    //   size: 480,
    //   apiKey: GOOGLE_MAP_API_KEY,
    //   style: {
    //     width: '150px',
    //     height: 'auto',
    //     objectFit: 'contain',
    //   },
    // };
    return (
      <Col {...{ xs: 24, sm: 24, md: 12, lg: 12 }}>
        <Map mapTypeControl={false} fullscreenControl={false}>
          {partners.map(partner => {
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
              <p className="section__paragraph">
                {_get(selectedPlace, 'info.name', 'N/A')}
              </p>
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
    );
  }

  render() {
    const { className, id } = this.props;
    const classSets = `network ${className}`;
    return (
      <div className={classSets} id={id}>
        <h2 className="section__header">中醫網絡</h2>
        <RowContainer gutter={16}>
          {this.renderForm()}
          {this.renderMap()}
        </RowContainer>
      </div>
    );
  }
}

export default Form.create()(NetWorkSearch);

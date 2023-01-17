import React from "react";
import { Col, Row, Collapse, Typography, Avatar } from "antd";
import millify from "millify";
import { useGetCryptoExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";
const { Panel } = Collapse;
const Text = Typography;
const Exchanges = () => {
  const { data: coinExchanges, isFetching } = useGetCryptoExchangesQuery();
  const exchangesData = coinExchanges?.data?.exchanges;
  if (isFetching) return <Loader />;
  return (
    <>
      <Row>
        <Col span={8}>Exchanges</Col>
        <Col span={8} className="ml-10-media">
          24h Trade Volume
        </Col>
        <Col span={8} className="ml-10">
          Markets
        </Col>
      </Row>

      {exchangesData?.map((dataExchange) => (
        <Collapse key={dataExchange?.uuid}>
          <Panel
            header={
              <Row>
                <Col span={8}>
                  <Row>
                    <Text>
                      <strong>{dataExchange?.rank}.</strong>
                    </Text>
                    <Avatar
                      className="exchange-image"
                      src={dataExchange?.iconUrl}
                      alt={dataExchange?.name}
                    />
                    <Text>
                      <strong>{dataExchange?.name}</strong>
                    </Text>
                  </Row>
                </Col>
                <Col span={8}>${millify(dataExchange?.["24hVolume"])}</Col>
                <Col span={8}>{millify(dataExchange?.numberOfMarkets)}</Col>
              </Row>
            }
            key="1"
            showArrow={false}
          >
            <p>Description: {dataExchange?.description || "empty"}</p>
          </Panel>
        </Collapse>
      ))}
    </>
  );
};

export default Exchanges;

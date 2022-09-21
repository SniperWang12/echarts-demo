import { Card, Col, message, Modal, Tooltip } from 'antd';
import React, { Fragment } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { chart1_option } from '@/pages/Charts/tempData';

interface IProps {
  content: any;
  title: string;
  code: any;
}

const ContentCard: React.FC<IProps> = (props: IProps) => {
  const handleCopy = () => {
    message.success('点击复制');
  };
  return (
    <Fragment>
      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={8}>
        <Card
          title={props.title}
          bordered
          className="card"
          actions={[
            <Tooltip title="copy and paste ">
              <CopyToClipboard
                onCopy={handleCopy}
                text={JSON.stringify(props.code)}
              >
                <CopyOutlined />
              </CopyToClipboard>
            </Tooltip>,
          ]}
        >
          <div className="card-content">{props.content}</div>
        </Card>
      </Col>
    </Fragment>
  );
};

export { ContentCard };

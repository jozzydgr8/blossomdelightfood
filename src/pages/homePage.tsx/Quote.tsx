import { Typography } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const Quote = () => {
  return (
    <section className="quotesection">
      <div className="container-fluid" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        {/* <MessageOutlined style={{ fontSize: '4rem', color: '#dc3545', marginBottom: '1rem' }} /> */}
        <h1>
          <q>
              One cannot think well, love well, sleep well, if one has not dined well. Food is much more than sustenance — 
              it is culture, comfort, and a universal language that brings people together.
          </q>
        </h1>
        <Paragraph style={{ fontStyle: 'italic', color:"white" }}>
        – Inspired by Virginia Woolf
        </Paragraph>

      </div>
    </section>
  );
};

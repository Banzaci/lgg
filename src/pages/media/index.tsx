import React from 'react';
import { Row, Paragraph, H2, HREF } from '../../styles/common';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { Container } from './style';

const Media = () => (
  <Layout>
    <Container>
      <SEO title="Media" />
      <Row direction="column">
        <HREF href="http://www.confuzine.com/2013/06/12/diy-busua-beach-ghana-africa/">
          Confuzine
        </HREF>
        <H2>Skateboard pool</H2>
        <Paragraph>
          Article about the skateboard pool that took place 2010.
        </Paragraph>
      </Row>
    </Container>
  </Layout>
)

export default Media

import React from 'react';
import styled from 'styled-components';
import Form from './components/Form';
import Navbar from '../../components/navbar/Navbar';
import SettingsSidePanel from '../../components/SettingsSidePanel/SettingsSidePanel';

export const Login = () => {
  return (
    <>
      <Navbar />
      <SettingsSidePanel />
      <ContentContainer>
        <Form />
      </ContentContainer>
    </>
  );
};

export default Login;

export const ContentContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const TagStyle = styled.div`
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #2C83EA;
    font-size: 12px;
    font-weight: 400;
    color: #2C83EA;
    margin-left: 0.5rem;
    padding: 0 0.3rem;
  `;
export default function TrustTag() {
  const {t} = useTranslation()

  return (
    <TagStyle><span>{t('Trustee')}</span></TagStyle>
  );
}

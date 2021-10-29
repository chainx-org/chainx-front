import React from 'react';
import ListItem from './ListItem';
import styled from 'styled-components';
import lightNing from '../../assets/Lightning.svg';

interface Item {
  title: string;
  content: React.ReactNode;
  showData?: Object;
}

interface ListProps {
  className?: string;
  children?: React.ReactNode;
  list: Item[];
  loading: boolean;
}

const Box = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.04);
  border-radius: 10px;
  border: 1px solid #E9E9E9;
  position: relative;
`;

function List({
                className = '',
                list,
                loading,
              }: ListProps): React.ReactElement {
  return (
    <div className="px-24 pb-4 bg-gray-bgWhite screen:px-4" style={{
      background: 'linear-gradient(to bottom, black 0%, black 20%, #f5f5f5 20%, #f5f5f5 100%)'
    }}>
      <Box
      >
        {list.map((item) => {
          return (
            <ListItem
              key={item.title}
              title={item.title}
              content={item.content}
              loading={loading}
            />
          );
        })}
      </Box>
    </div>
  );
}

export default List;

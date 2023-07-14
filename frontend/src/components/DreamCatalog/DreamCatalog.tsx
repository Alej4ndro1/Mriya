import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import { Dream } from '../../types/Dreams';
import { DreamCard } from '../DreamCard';

type DreamsType = {
  dreams: Dream[]
};

export const DreamCatalog: React.FC<DreamsType> = ({ dreams }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [DreamsPerPage, setDreamsPerPage] = useState(9);

  const lastDreamIndex = currentPage * DreamsPerPage;
  const firstDreamIndex = lastDreamIndex - DreamsPerPage;
  const currentDream = dreams.slice(firstDreamIndex, lastDreamIndex);

  const items: MenuProps['items'] = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];

  console.log(dreams);
  

  return (
    <div className="dreamCatalog">
      <div className='dreamCatalog__container'>
        <h1 className='dreamCatalog__title'>Dreams</h1>

        <div className='dreamCatalog__cards'>
          {currentDream.map(card =>
            <DreamCard key={card.id} dream={card} />)
          }
        </div>

        {/* <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown> */}
      </div>
    </div >
  );
};
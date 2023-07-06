import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

export const DreamCatalog = () => {
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

  return (
    <div className="dreamCatalog">
      <div className='dreamCatalog__container'>
        <h1 className='dreamCatalog__title'>Dreams</h1>

        <Dropdown menu={{ items }} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Click me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div >
  );
};
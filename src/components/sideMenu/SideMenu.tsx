import React from 'react'
import styles from './SideMenu.module.css'
import { sideMenuList } from './mockup'
import { Menu } from 'antd'
import { GifOutlined } from '@ant-design/icons'

export const SideMenu: React.FC = () => {
  return (
    <Menu mode='vertical' className={styles['side-menu']}>
      {sideMenuList.map((menu, index) => (
        <Menu.SubMenu
          key={`side-menu-${index}`}
          title={
            <span>
              <GifOutlined />
              {menu.title}
            </span>
          }
        >
          {menu.subMenu.map((subMenuItem, subMenuIndex) => (
            <Menu.SubMenu
              key={`sub-menu-${subMenuIndex}`}
              title={
                <span>
                  <GifOutlined />
                  {subMenuItem.title}
                </span>
              }
            >
              {subMenuItem.subMenu.map((sms, smsIndex) => (
                <Menu.Item key={`sub-sub-menu-${smsIndex}`}>
                  <span><GifOutlined />{sms}</span>
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}

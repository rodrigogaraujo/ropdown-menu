import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuItem, MenuContainer, MenuItem } from './styles'

interface MenuItem {
  title: string
  href: string
  children?: MenuItem[]
}

export interface MenuProps {
  menu: MenuItem[]
}

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null)
  const [activeLink, setActiveLink] = useState<string>('')

  const handleMenuClick = (index: number, href: string) => {
    setActiveMenu(index)
    setActiveLink(href)
  }

  const handleChildClick = (event: React.MouseEvent<HTMLLIElement>, href: string) => {
    event.stopPropagation()
    setActiveLink(href)
  }

  const handleMenuEnter = (index: number) => {
    setActiveMenu(index)
  }

  const handleMenuLeave = () => {
    setActiveMenu(null)
  }

  return (
    <MenuContainer>
      {menu.map((item, index) => (
        <MenuItem
          key={index}
          onClick={() => handleMenuClick(index, item.href)}
          onMouseEnter={() => handleMenuEnter(index)}
          onMouseLeave={handleMenuLeave}
        >
          {item.title}
          {activeMenu === index && (
            <DropdownMenu isOpen={true}>
              {item.children?.map((child, childIndex) => (
                <DropdownMenuItem
                  key={childIndex}
                  isFirstChild={childIndex === 0}
                  onClick={(event) => handleChildClick(event, child.href)}
                >
                  {child.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenu>
          )}
        </MenuItem>
      ))}
      {activeLink && (
        <p style={{ marginTop: 160, width: '100%', height: 200, color: 'red' }}>
          Link ativo: {activeLink}
        </p>
      )}
    </MenuContainer>
  )
}

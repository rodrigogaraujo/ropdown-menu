import React from 'react'
import { Menu } from '../../components/Menu'
import { DATA } from '../utils'

const Dashboard: React.FC = () => {
  return <Menu menu={DATA.menu} />
}

export default Dashboard

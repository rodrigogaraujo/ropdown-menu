import { MenuProps } from "../../components/Menu";

export const DATA: MenuProps = {
    menu: [
      {
        title: 'Oi Fibra Internet',
        href: '#titulo',
        children: [
          {
            title: 'Oi 100 Mega',
            href: '#filho1',
          },
          {
            title: 'Oi 200 Mega',
            href: '#filho2',
          },
          {
            title: 'Oi 400 Mega',
            href: '#filho3',
          },
          {
            title: 'Oi 500 Mega',
            href: '#filho4',
          },
        ],
      },
      {
        title: 'Oi TV',
        href: '#titulo 2',
        children: [
          {
            title: 'Oi TV filho1',
            href: '#filho1',
          },
          {
            title: 'Oi TV filho2',
            href: '#filho2',
          },
          {
            title: 'Oi TV filho3',
            href: '#filho3',
          },
          {
            title: 'Oi TV filho4',
            href: '#filho4',
          },
        ],
      },
    ],
  };
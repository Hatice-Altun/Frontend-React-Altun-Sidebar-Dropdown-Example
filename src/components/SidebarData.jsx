import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Overzicht",
    path: "/overzicht",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Gebruikers",
        path: "/overzicht/gebruikers",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Afname",
        path: "/overzicht/afname",
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Facturen",
    path: "/facturen",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Factuur 1",
        path: "/facturen/factuur1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav"
      },
      {
        title: "Factuur 2",
        path: "/facturen/factuur2",
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: "Factuur 3",
        path: "/facturen/factuur3",
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Producten",
    path: "/producten",
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: "Berichten",
    path: "/berichten",
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Bericht 1",
        path: "/berichten/bericht1",
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: "Bericht 2",
        path: "/berichten/bericht2",
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />
  }
];

import React, { useState, useEffect } from "react";
import { UncontrolledCollapse } from "reactstrap";

const Menu = (props) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const menuData = [
      {
        id: 1,
        name: "test 1",
        children: [
          { id: 5, name: "test 5", children: [] },
          {
            id: 6,
            name: "test 6",
            children: [
              { id: 7, name: "test 7", children: [] },
              { id: 8, name: "test 8", children: [] },
            ],
          },
        ],
      },
      { id: 2, name: "test 2", children: [] },
    ];
    const returnMenuItem = (item, i) => {
      let menuItem;

      if (item.children.length === 0) {
        menuItem = (
          <div className="item" key={i}>
            {item.name}
          </div>
        );
      } else {
        let menuItemChildren = item.children.map((item, i) => {
          let menuItem = returnMenuItem(item, i);
          return menuItem;
        });
        menuItem = (
          <div key={i} className="item">
            <div className="toggler" id={`toggle-menu-item-${item.id}`}>
              {item.name}
            </div>
            <UncontrolledCollapse
              className="children"
              toggler={`#toggle-menu-item-${item.id}`}
            >
              {menuItemChildren}
            </UncontrolledCollapse>
          </div>
        );
      }
      return menuItem;
    };

    const load = async () => {
      setLoading(false);
      let menuItems = menuData.map((item, i) => {
        let menuItem = returnMenuItem(item, i);
        return menuItem;
      });
      setItems(menuItems);
    };
    if (loading) {
      load();
    }
  }, [loading]);

  return <div className="items">{items}</div>;
};

export default Menu;

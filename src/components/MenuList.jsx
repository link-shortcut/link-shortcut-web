import Menu from "./Menu";

export default function MenuList({ selectedMenuId }) {
  const menus = [
    {
      id: "createURL",
      linkTo: "/",
      menuName: "단축 URL 생성",
    },
    {
      id: "expireURL",
      linkTo: "/expire",
      menuName: "URL 만료하기",
    },
  ];

  const isSelectedMenu = (menuId) => selectedMenuId === menuId;

  return (
    <>
      {menus.map((menu) => (
        <Menu
          key={menu.id}
          id={menu.id}
          linkTo={menu.linkTo}
          menuName={menu.menuName}
          isSelected={isSelectedMenu(menu.id)}
        />
      ))}
    </>
  );
}

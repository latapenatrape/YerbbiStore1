<Drawer
  items={cartItems}
  onClose={() => setCartOpened(false)}
  onRemove={onRemoveItem}
  opened={cartOpened}
/>;

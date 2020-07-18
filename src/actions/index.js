export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const TOGGLE_CONTACT_MENU = 'TOGGLE_CONTACT_MENU';
export const CLOSE_SCROLL = 'CLOSE_SCROLL';
export const OPEN_SCROLL = 'OPEN_SCROLL';
export const CLOSE_MENU = 'CLOSE_MENU';

// ACTION CREATOR
export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const toggleContactMenu = () => ({
  type: TOGGLE_CONTACT_MENU,
});

export const closeScroll = () => ({
  type: CLOSE_SCROLL,
});

export const openScroll = () => ({
  type: OPEN_SCROLL,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
});

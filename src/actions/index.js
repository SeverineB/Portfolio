export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const TOGGLE_CONTACT_MENU = 'TOGGLE_CONTACT_MENU';
export const CLOSE_CONTACT_MENU = 'CLOSE_CONTACT_MENU';
export const CLOSE_SCROLL = 'CLOSE_SCROLL';
export const OPEN_SCROLL = 'OPEN_SCROLL';
export const CLOSE_MENU = 'CLOSE_MENU';
export const SHOW_BUTTON = 'SHOW_BUTTON';
export const HIDE_BUTTON = 'HIDE_BUTTON';

// ACTION CREATOR
export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});

export const toggleContactMenu = () => ({
  type: TOGGLE_CONTACT_MENU,
});

export const closeContactMenu = () => ({
  type: CLOSE_CONTACT_MENU,
});

export const closeScroll = () => ({
  type: CLOSE_SCROLL,
});

export const openScroll = () => ({
  type: OPEN_SCROLL,
});

export const showButton = () => ({
  type: SHOW_BUTTON,
});

export const hideButton = () => ({
  type: HIDE_BUTTON,
});

export const closeMenu = () => ({
  type: CLOSE_MENU,
});

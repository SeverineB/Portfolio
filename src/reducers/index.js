import {
  TOGGLE_OPEN,
  TOGGLE_CONTACT_MENU,
  CLOSE_CONTACT_MENU,
  CLOSE_SCROLL,
  OPEN_SCROLL,
  CLOSE_MENU,
  SHOW_BUTTON,
  HIDE_BUTTON,
} from '../actions';

import datas from '../../data';

const initialState = {
  title: datas.title,
  subtitle: datas.subtitle,
  email: datas.email,
  phone: datas.phone,
  training: datas.training,
  trainingList: datas.trainingList,
  links: datas.links,
  projetspersos: datas.projetspersos,
  projetsformation: datas.projetsformation,
  isShown: false,
  skills: datas.skills,
  softs: datas.softs,
  socials: datas.socials,
  infos: datas.about,
  open: false,
  menuOpen: false,
  fixed: false,
  buttonShown: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    case TOGGLE_CONTACT_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen,
      };
    case CLOSE_SCROLL:
      return {
        ...state,
        fixed: false,
      };
    case OPEN_SCROLL:
      return {
        ...state,
        fixed: true,
      };
    case CLOSE_MENU:
      return {
        ...state,
        open: false,
      };
    case CLOSE_CONTACT_MENU:
      return {
        ...state,
        menuOpen: false,
      };
    case SHOW_BUTTON:
      return {
        ...state,
        buttonShown: true,
      };
    case HIDE_BUTTON:
      return {
        ...state,
        buttonShown: false,
      };
    default:
      return state;
  }
};

export default reducer;

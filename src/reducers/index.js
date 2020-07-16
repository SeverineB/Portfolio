import {
  TOGGLE_OPEN,
  CLOSE_SCROLL,
  OPEN_SCROLL,
  CLOSE_MENU,
} from '../actions';

import datas from '../../data';

const initialState = {
  title: datas.title,
  subtitle: datas.subtitle,
  email: datas.email,
  phone: datas.phone,
  links: datas.links,
  projets: datas.projets,
  isShown: false,
  skills: datas.skills,
  softs: datas.softs,
  socials: datas.socials,
  infos: datas.about,
  open: false,
  fixed: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_OPEN:
      return {
        ...state,
        open: !state.open,
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
    default:
      return state;
  }
};

export default reducer;

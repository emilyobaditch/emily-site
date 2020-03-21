import * as CSS from 'csstype';

export interface ThemeColors {
  ultra: CSS.ColorProperty;
  dull: CSS.ColorProperty;
  accent: CSS.ColorProperty;
  default: CSS.ColorProperty;
  dark: CSS.ColorProperty;
  darker: CSS.ColorProperty;
  
}

export const colors: ThemeColors = {
  ultra: "#FFF",
  dull: "#2d4159",
  accent: "#0677a1",
  default: "#895061",
  dark: "#78244c",
  darker: "#59253a",
};

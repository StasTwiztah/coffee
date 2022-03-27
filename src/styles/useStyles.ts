import { useMemo } from "react";

export function useStyles<TStyles extends Record<string, unknown>, TProps>(
  styles: (props: TProps) => TStyles,
  props: TProps
): TStyles;

export function useStyles<TStyles extends Record<string, unknown>>(
  factory: () => TStyles
): TStyles;

/**
 * A hook that applies the theme from the ThemeProvider to the style object
 * for CSS in JS code. It optionally passes in props if desired.
 * @param styles The styles CSS in JS style object.
 * @param props Optionally pass in props from the components to the styles object.
 * @returns the styles object with an injected theme.
 */
export function useStyles<
  TStyles extends Record<string, unknown>,
  TProps = undefined
>(styles: (props?: TProps) => TStyles, props?: TProps): TStyles {
  return useMemo(() => styles(props), [props, styles]);
}

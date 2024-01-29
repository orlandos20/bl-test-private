import { Pressable, PressableProps, StyleSheet, View } from 'react-native';
import React from 'react';

interface ButtonProps extends PressableProps {
  children?: string | React.ReactElement;
  variant: 'success' | 'info' | 'warning' | 'error';
}

const Button = React.forwardRef<View, ButtonProps>((props, ref) => {
  const { children, variant } = props;

  return (
    <Pressable
      ref={ref}
      onPress={props.onPress}
      style={{
        ...styles.container,
        ...styles[variant],
        ...(props.disabled && {
          opacity: 0.7,
        }),
      }}
    >
      {children}
    </Pressable>
  );
});

export default Button;

const styles = StyleSheet.create({
  container: {
    textTransform: 'uppercase',
    color: 'rgb(27, 27, 27)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 1,
    borderRadius: 100,
    marginRight: 20,
  },
  success: {
    backgroundColor: '#16a34a',
    color: '#fff',
  },
  info: {
    backgroundColor: '#16a34a',
  },
  warning: {
    backgroundColor: '#16a34a',
  },
  error: {
    backgroundColor: '#dc2626',
  },
});

import { ReactNode } from 'react';
import { ScrollView, StyleSheet, TextStyle, ViewStyle } from 'react-native';

import { SelectablePill } from './SelectablePill';

type BaseProps<Items> = {
  items: Items;
  pillStyle?: ViewStyle;
  pillTextStyle?: TextStyle;
  allowDeselect?: boolean;
  disabled?: boolean;
  testID?: string;
};

type ValueProps<Value> =
  | {
      allowDeselect: true;
      value: Value | undefined;
      onChange: (value: Value | undefined) => void;
    }
  | {
      allowDeselect: false;
      value: Value;
      onChange: (value: Value) => void;
    };

type Props<Items, Value> = BaseProps<Items> & ValueProps<Value>;

export const SelectablePills = <Value, Item extends { key: Value; label: ReactNode }, Items extends readonly Item[]>({
  items,
  value,
  onChange,
  pillStyle,
  pillTextStyle,
  allowDeselect,
  disabled,
  testID,
}: Props<Items, Value>) => {
  const onChangeHandler = (item: Item) => {
    if (allowDeselect && value === item.key) {
      onChange(undefined);
    } else {
      onChange(item.key);
    }
  };

  return (
    <ScrollView
      horizontal
      alwaysBounceHorizontal={false}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
    >
      {items.map(item => {
        const isSelected = value === item.key;
        return (
          <SelectablePill
            accessibilityRole={'radio'}
            testID={`${testID as string}-${item.key as string}`}
            key={item.key as string}
            onChange={() => onChangeHandler(item)}
            isSelected={isSelected}
            style={pillStyle}
            textStyle={pillTextStyle}
            disabled={disabled}
          >
            {item.label}
          </SelectablePill>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    marginLeft: -16,
    marginRight: -16,
  },
  scrollViewContent: {
    paddingLeft: 16,
    paddingRight: 8,
  },
});

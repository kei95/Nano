import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import CheckBox from '../index';
import {COLORS} from '../../../constants/color';
import {CHECKBOX_ID} from '../constants/testIds';

it('Should successfully with expected color. It will press the check box and it should toggle to be checked(false => true)', () => {
  // arrange
  let isPressed = false;
  const mockFn = () => (isPressed = true);
  const {getByTestId} = render(
    <CheckBox isChecked={isPressed} onPress={mockFn} />,
  );
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);

  // assert
  expect(foundBodyElement.props.style.borderColor).toEqual(COLORS.TERTIARY);
  expect(foundBodyElement).toBeTruthy();
});

it('From false state, it should change to false once its pressed(false => true)', () => {
  // arrange
  let isPressed = true;
  const mockFn = () => (isPressed = false);
  const {getByTestId} = render(
    <CheckBox isChecked={isPressed} onPress={mockFn} />,
  );
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);
  const checkMarkElementLeft = getByTestId(CHECKBOX_ID.COMPONENT_ICON_LEFT);
  const checkMarkElementRight = getByTestId(CHECKBOX_ID.COMPONENT_ICON_RIGHT);

  // act
  fireEvent.press(foundBodyElement);

  // assert
  expect(isPressed).toEqual(false);
  expect(foundBodyElement.props.style.backgroundColor).toEqual(
    COLORS.SECONDARY_RGBA,
  );
  expect(checkMarkElementLeft.props.style.width).toBeGreaterThan(0);
  expect(checkMarkElementRight.props.style.width).toBeGreaterThan(0);
});

it('From true state, it should change to false once its pressed(true => false)', () => {
  // arrange
  let isPressed = true;
  const mockFn = () => (isPressed = false);
  const {getByTestId} = render(
    <CheckBox isChecked={isPressed} onPress={mockFn} />,
  );
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);
  const checkMarkElementLeft = getByTestId(CHECKBOX_ID.COMPONENT_ICON_LEFT);
  const checkMarkElementRight = getByTestId(CHECKBOX_ID.COMPONENT_ICON_RIGHT);

  // act
  fireEvent.press(foundBodyElement);

  // assert
  setTimeout(() => {
    expect(isPressed).toEqual(false);
    expect(foundBodyElement.props.style.borderColor).toEqual(COLORS.TERTIARY);
    expect(foundBodyElement.props.style.backgroundColor).toEqual(
      COLORS.SECONDARY_RGBA_TRANSPARENT,
    );
    expect(checkMarkElementLeft.props.style.width).toEqual(0);
    expect(checkMarkElementRight.props.style.width).toEqual(0);
  }, 500);
});

it('Unchecked - background color should be undefined', () => {
  // arrange
  const mockFn = jest.fn();
  const {getByTestId} = render(<CheckBox isChecked={false} onPress={mockFn} />);
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);
  const checkMarkElementLeft = getByTestId(CHECKBOX_ID.COMPONENT_ICON_LEFT);
  const checkMarkElementRight = getByTestId(CHECKBOX_ID.COMPONENT_ICON_RIGHT);

  // assert
  expect(foundBodyElement.props.style.borderColor).toEqual(COLORS.TERTIARY);
  expect(foundBodyElement.props.style.backgroundColor).toEqual(
    COLORS.SECONDARY_RGBA_TRANSPARENT,
  );
  expect(checkMarkElementLeft.props.style.width).toEqual(0);
  expect(checkMarkElementRight.props.style.width).toEqual(0);
});

it('Checked - checkBox should be filled and there should be check icon ', () => {
  // arrange
  const mockFn = jest.fn();
  const {getByTestId} = render(<CheckBox isChecked={true} onPress={mockFn} />);
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);
  const checkMarkElementLeft = getByTestId(CHECKBOX_ID.COMPONENT_ICON_LEFT);
  const checkMarkElementRight = getByTestId(CHECKBOX_ID.COMPONENT_ICON_RIGHT);

  // assert
  expect(foundBodyElement.props.style.backgroundColor).toEqual(
    COLORS.SECONDARY_RGBA,
  );
  expect(checkMarkElementLeft.props.style.width).toBeGreaterThan(0);
  expect(checkMarkElementRight.props.style.width).toBeGreaterThan(0);
});

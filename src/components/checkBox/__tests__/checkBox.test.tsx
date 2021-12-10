import * as React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import CheckBox from '../index';
import {COLORS} from '../../../constants/color';
import {CHECKBOX_ID} from '../constants/testIds';
import {TYPOGRAPHY} from '@src/constants/typography';

it('Should successfully with expected color. It will press the check box and it should toggle to be checked(false => true)', () => {
  // arrange
  let isPressed = false;
  const mockText = 'mockText';
  const mockSubText = 'mockSubText';
  const mockFn = () => (isPressed = true);

  // Act
  const {getByTestId, getByText} = render(
    <CheckBox
      isChecked={isPressed}
      onPress={mockFn}
      text={mockText}
      subText={mockSubText}
    />,
  );
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);
  const foundTextElement = getByText(mockText);
  const foundSubTextElement = getByText(mockSubText);

  // assert
  expect(foundBodyElement).toBeTruthy();
  expect(foundTextElement).toBeTruthy();
  expect(foundSubTextElement).toBeTruthy();
  expect(foundBodyElement.props.style.borderColor).toEqual(COLORS.TERTIARY);
  expect(foundTextElement.props.style.fontSize).toEqual(
    TYPOGRAPHY.MEDIUM.fontSize,
  );
  expect(foundSubTextElement.props.style.fontSize).toEqual(
    TYPOGRAPHY.SMALL.fontSize,
  );
});

it('From false state, it should change to false once its pressed(false => true)', () => {
  // arrange
  let isPressed = false;
  const mockText = 'mockText';
  const mockSubText = 'mockSubText';
  const mockFn = () => (isPressed = true);

  // act
  const {getByTestId, getByText} = render(
    <CheckBox
      isChecked={isPressed}
      onPress={mockFn}
      text={mockText}
      subText={mockSubText}
    />,
  );
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);
  const checkMarkElementLeft = getByTestId(CHECKBOX_ID.COMPONENT_ICON_LEFT);
  const checkMarkElementRight = getByTestId(CHECKBOX_ID.COMPONENT_ICON_RIGHT);
  const foundTextElement = getByText(mockText);
  const foundSubTextElement = getByText(mockSubText);

  fireEvent.press(foundBodyElement);

  // assert
  setTimeout(() => {
    expect(isPressed).toEqual(true);
    expect(foundBodyElement.props.style.backgroundColor).toEqual(
      COLORS.SECONDARY_RGBA,
    );
    // check marks should show up
    expect(checkMarkElementLeft.props.style.width).toBeGreaterThan(0);
    expect(checkMarkElementRight.props.style.width).toBeGreaterThan(0);

    expect(foundTextElement).toBeTruthy();
    expect(foundSubTextElement).toBeTruthy();
  }, 500);
});

it('From true state, it should change to false once its pressed(true => false)', () => {
  // arrange
  let isPressed = true;
  const mockText = 'mockText';
  const mockSubText = 'mockSubText';
  const mockFn = () => (isPressed = false);
  const {getByTestId, getByText} = render(
    <CheckBox
      isChecked={isPressed}
      onPress={mockFn}
      text={mockText}
      subText={mockSubText}
    />,
  );
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);
  const checkMarkElementLeft = getByTestId(CHECKBOX_ID.COMPONENT_ICON_LEFT);
  const checkMarkElementRight = getByTestId(CHECKBOX_ID.COMPONENT_ICON_RIGHT);
  const foundTextElement = getByText(mockText);
  const foundSubTextElement = getByText(mockSubText);

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

    expect(foundTextElement).toBeTruthy();
    expect(foundSubTextElement).toBeTruthy();
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

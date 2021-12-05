import * as React from 'react';
import {render} from '@testing-library/react-native';

import CheckBox from '../index';
import {COLORS} from '../../../constants/color';
import {CHECKBOX_ID} from '../constants/testIds';

it('Should successfully rendered and has border color with secondary color', () => {
  const {getByTestId} = render(<CheckBox isChecked={false} />);
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);

  expect(foundBodyElement.props.style.borderColor).toEqual(COLORS.TERTIARY);
  expect(foundBodyElement).toBeTruthy();
});

it('Unchecked - background color should be undefined', () => {
  const {getByTestId} = render(<CheckBox isChecked={false} />);
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);

  expect(foundBodyElement.props.style.backgroundColor).toEqual(undefined);
});

it('Checked - checkBox should be filled and there should be check icon ', () => {
  const {getByTestId} = render(<CheckBox isChecked={true} />);
  const foundBodyElement = getByTestId(CHECKBOX_ID.COMPONENT_BODY);
  const checkMarkElement = getByTestId(CHECKBOX_ID.COMPONENT_ICON);

  expect(foundBodyElement.props.style.backgroundColor).toEqual(
    COLORS.SECONDARY,
  );
  expect(checkMarkElement).toBeTruthy();
});

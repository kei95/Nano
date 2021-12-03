import * as React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';

import Body from '../index';
import {COLORS} from '../../../constants/color';
import {BODY_TEST_IDs} from '../constants/testIds';

it('Rendered body should have primary color', () => {
  const {getByTestId} = render(<Body />);
  const foundBodyElement = getByTestId(BODY_TEST_IDs.COMPONENT_BODY);

  expect(foundBodyElement.props.style.backgroundColor).toEqual(COLORS.PRIMARY);
});

it('Rendered body should have passed child', () => {
  const testText = 'Test text';
  const {getByTestId, getByText} = render(
    <Body>
      <Text>{testText}</Text>
    </Body>,
  );
  const foundBodyElement = getByTestId(BODY_TEST_IDs.COMPONENT_BODY);
  const foundTextElement = getByText(testText);

  expect(foundBodyElement.props.style.backgroundColor).toEqual(COLORS.PRIMARY);
  expect(foundTextElement).toBeTruthy();
});

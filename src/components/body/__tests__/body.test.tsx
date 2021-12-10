import * as React from 'react';
import {Text} from 'react-native';
import {render} from '@testing-library/react-native';

import Body from '../index';
import {COLORS} from '../../../constants/color';
import {BODY_TEST_IDs} from '../constants/testIds';

it('Rendered body should have primary color', () => {
  const {getByTestId} = render(<Body />);
  const foundBodyElement = getByTestId(BODY_TEST_IDs.COMPONENT_BODY);

  expect(foundBodyElement.props.style[0].backgroundColor).toEqual(
    COLORS.PRIMARY,
  );
});

it('Rendered body should have passed child', () => {
  const testText = 'Test text';
  const mockStyleProps = {flex: 2};
  const {getByTestId, getByText} = render(
    <Body style={mockStyleProps}>
      <Text>{testText}</Text>
    </Body>,
  );
  const foundBodyElement = getByTestId(BODY_TEST_IDs.COMPONENT_BODY);
  const foundTextElement = getByText(testText);

  expect(foundBodyElement.props.style[0].backgroundColor).toEqual(
    COLORS.PRIMARY,
  );
  expect(foundBodyElement.props.style[1]).toEqual(mockStyleProps);
  expect(foundTextElement).toBeTruthy();
});

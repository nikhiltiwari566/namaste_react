import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { Body } from '../Body';
import { BrowerRouter } from 'react-router-dom';
it('should render the body component with search', async () => {
  await act(async () => {
    render(
      <BrowerRouter>
        <Body />
      </BrowerRouter>
    );
  });
});

import { PostCard } from '.';
import { postCardPropsMock } from './mock';
const { render, screen } = require('@testing-library/react');

const props = postCardPropsMock;

describe('<PostCard/>', () => {
  it('should render PostCard correctly', () => {
    render(<PostCard {...props} />);

    expect(screen.getByRole('img', { name: 'title 1' })).toHaveAttribute('src', props.cover);
    expect(screen.getByRole('heading', { name: 'title 1 1' })).toBeInTheDocument();
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });

  // it("should match snapshot", () => {
  //   const { container } = render(<PostCard {...props} />);
  //   expect(container.firstChild).toMatchSnapshot();
  // });
});

import { screen, render } from '@testing-library/react'
import { Main } from '.'

describe('<Main />', () => {
  it('Should render heading', async () => {
    render(<Main />)

    const heading = await screen.findByRole('heading', {
      name: /react avançado/i
    })
    expect(heading).toBeInTheDocument()
    expect(heading).toMatchSnapshot()
  })

  it('should render bg color correctly', async () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})

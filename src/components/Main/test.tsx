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
})

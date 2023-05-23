import { compose } from 'hoc-compose'
import { withRouter } from './withRouter'
import { withTheme } from './withTheme'
import { withQuery } from './withQuery'
import { withLoading } from './withLoading'

export const withProviders = compose(withQuery, withTheme, withRouter, withLoading)

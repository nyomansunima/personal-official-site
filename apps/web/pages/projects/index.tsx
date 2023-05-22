import { GeneralLayout } from '@components/layouts'
import { NextPageWithLayout } from '~/types/app'

/**
 * # ProjectPage
 *
 * showing the all projects
 * and filter by the categories
 *
 * @returns JSX.Element
 */
const ProjectPage: NextPageWithLayout = (): JSX.Element => {
  return <></>
}

ProjectPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export default ProjectPage

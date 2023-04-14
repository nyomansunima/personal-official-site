import { GeneralLayout } from '@components/layouts'
import { NextPageWithLayout } from '~/types/app'

/**
 * # ProjectDetailPage
 *
 * showing detail information about the project
 * inlcuding the process and the ideas
 *
 * @returns JSX.Element
 */
const ProjectDetailPage: NextPageWithLayout = (): JSX.Element => {
  return <></>
}

ProjectDetailPage.layout = (page) => {
  return <GeneralLayout>{page}</GeneralLayout>
}

export default ProjectDetailPage

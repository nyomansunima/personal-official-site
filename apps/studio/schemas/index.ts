import certificateSchema from './certificate/certificate-schema'
import clientSchema from './client/client-schema'
import seoSchema from './common/seo-schema'
import contentSchema from './content/content-schema'
import exploreSchema from './explore/explore-schema'
import faqCategorySchema from './faq/faq-category'
import faqSchema from './faq/faq-schema'
import inspirationListSchema from './inspiration/list'
import inspirationSourceSchema from './inspiration/source'
import projectAreaSchema from './project/project-area-schema'
import projectClientSchema from './project/project-client-schema'
import projectOverviewSchema from './project/project-overview-schema'
import projectSchema from './project/project-schema'
import projectTeamSchema from './project/project-team-schema'
import repoSchema from './repos/repo-schema'
import serviceAboutSchema from './service/service-about-schema'
import serviceOverviewSchema from './service/service-overview-schema'
import servicePlatformSchema from './service/service-platfrom-schema'
import serviceProcessSchema from './service/service-process-schema'
import servicePurposeSchema from './service/service-purpose-schema'
import servicePackSchema from './service/service-pack-schema'
import serviceResultSchema from './service/service-result-schema'
import serviceSchema from './service/service-schema'
import serviceToolSchema from './service/service-tool-schema'
import socialSchema from './socials/social-schema'
import storySchema from './story/story-schema'
import timelineSchema from './timeline/timeline-schema'
import toolSchema from './tools/tool-schema'

export const schemaTypes = [
  inspirationSourceSchema,
  inspirationListSchema,

  // project
  projectOverviewSchema,
  projectTeamSchema,
  projectAreaSchema,
  projectClientSchema,
  projectSchema,

  // faq
  faqCategorySchema,
  faqSchema,

  // explore
  exploreSchema,

  // content
  contentSchema,

  // repos
  repoSchema,

  // service
  servicePackSchema,
  servicePlatformSchema,
  servicePurposeSchema,
  serviceResultSchema,
  serviceToolSchema,
  serviceProcessSchema,
  serviceAboutSchema,
  serviceOverviewSchema,
  serviceSchema,

  // common
  seoSchema,

  // socials
  socialSchema,

  // client
  clientSchema,

  // tools
  toolSchema,

  // story
  storySchema,

  // certificate
  certificateSchema,

  // timeline
  timelineSchema,
]

import certificateSchema from './certificate/certificate-schema'
import clientSchema from './client/client-schema'
import seoSchema from './common/seo-schema'
import faqCategorySchema from './faq/faq-category'
import faqSchema from './faq/faq-schema'
import inspirationListSchema from './inspiration/list'
import inspirationSourceSchema from './inspiration/source'
import projectAreaSchema from './project/project-area-schema'
import projectClientSchema from './project/project-client-schema'
import projectOverviewSchema from './project/project-overview-schema'
import projectSchema from './project/project-schema'
import projectTeamSchema from './project/project-team-schema'
import serviceAboutSchema from './service/service-about-schema'
import serviceOverviewSchema from './service/service-overview-schema'
import servicePlatformSchema from './service/service-platfrom-schema'
import serviceProcessSchema from './service/service-process-schema'
import servicePurposeSchema from './service/service-purpose-schema'
import serviceRequirementSchema from './service/service-requirement-schema'
import serviceResultSchema from './service/service-result-schema'
import serviceSchema from './service/service-schema'
import serviceToolSchema from './service/service-tool-schema'
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

  // service
  serviceRequirementSchema,
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

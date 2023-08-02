export const homeQuery = `
  {
    "posts": *[_type == "blog"] | order(_updatedAt desc)[0...3]{
      "slug": slug.current,
      title,
      "thumbnail": thumbnail.asset -> url,
      "tag": tags[0],
      _createdAt,
      featured,
      "isIncoming": "Incoming" in tags[],
    },
    "projects": *[_type == "project"] | order(_updatedAt desc) [0...3]{
      ...,
      "thumbnail": thumbnail.asset -> url,
      "slug": slug.current,
      "tag": tags[0]
    },
    "apps": *[_type == "app"] | order(_created desc){
      ...,
      "thumbnail": thumbnail.asset -> url,
    },
    "products": *[_type == "product"] | order(_createdAt desc){
      title,
      initialPrice,
      "thumbnail":images[0].asset->url,
      "slug": slug.current,
    }
  }
`

export const aboutQuery = `
{
  "timelines": *[_type == "timeline"] | order(_createdAt asc){
    ...,
    "image": image.asset -> url,
  },
  "contributions": *[_type == "contribute"] | order(_updatedAt desc) [0...6]{
    "image": image.asset ->url,
    title,
    desc,
    url,
  }
}
`

export const bioQuery = `
*[_type == "page" && slug.current == $slug][0]{
  content[0]{
    ...,
    "avatar": avatar.asset -> url,
    links[]{
      ...,
      "customColor": customColor.hex,
    }
  }
}
`

export const faqQuery = `*[_type == "faq"] | order(_createdAt asc){
  ...
}`

export const appsQuery = `*[_type == "app"] | order(_created desc){
  ...,
  "thumbnail": thumbnail.asset -> url,
}`

export const blogDetailQuery = `
{
  "post": *[_type == "blog" && slug.current == $slug][0]{
    ...,
    "thumbnail": thumbnail.asset -> url,
  },
  "related": *[_type == "blog" && slug.current != $slug && !("Incoming" in tags)] | order(_createdAt desc) [0...3]{
    "slug": slug.current,
    title,
    "thumbnail": thumbnail.asset -> url,
    "tag": tags[0],
    _createdAt,
    featured,
  }
}
`

export const blogQuery = `
{
  "featured": *[_type == "blog" && featured == true][0...2]{
    "slug": slug.current,
    title,
    "thumbnail": thumbnail.asset -> url,
    "tag": tags[0],
    _createdAt,
    featured,
    "isIncoming": "Incoming" in tags[],
  },
  "series": *[_type == "series"]{
    "slug": slug.current,
    "thumbnail": thumbnail.asset -> url,
    title,
    desc,
  },
  "latest": *[_type == "blog"] | order(_updatedAt desc){
    "slug": slug.current,
    title,
    "thumbnail": thumbnail.asset -> url,
    "tag": tags[0],
    _createdAt,
    featured,
    "isIncoming": "Incoming" in tags[],
  }
}
`

export const projectQuery = `
{
  "projects": *[_type == "project"]{
    ...,
    "thumbnail": thumbnail.asset -> url,
    "slug": slug.current,
    "tag": tags[0]
  }
}
`

export const productDetailQuery = `*[_type == "product" && slug.current == $slug][0]{
  ...,
  "slug": slug.current,
  "images": images[].asset -> url,
}`

export const productsQuery = `
{
  "recomendeds": *[_type == "product"] | order(_createdAt desc)[0...4]{
    title,
    initialPrice,
    "thumbnail":images[0].asset->url,
    "slug": slug.current,
  },
  "products": *[_type == "product"] | order(_createdAt desc){
    title,
    initialPrice,
    "thumbnail":images[0].asset->url,
    "slug": slug.current,
  }
}
`

export const loadSeriesDetail = `
  {
    "detail": *[_type == "series" && slug.current == $slug][0]{
      title,
      desc,
      "thumbnail": thumbnail.asset -> url,  
      "slug": slug.current,
      "totalContent": count(*[_type == "blog" && references(^._id)])
    },
    "contents": *[_type == "blog" && references(*[_type == "series" && slug.current == $slug][0]._id)] | order(_createdAt desc){
      "slug": slug.current,
      title,
      "thumbnail": thumbnail.asset -> url,
      "tag": tags[0],
      _createdAt,
      featured,
      "isIncoming": "Incoming" in tags[],
    }
  }
`

const posts = [
  {
    id: 1,
    title: 'Beach Cleanup Projects',
    href: '/blog/post1',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'life-3.jpeg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Conservation', href: '#' },
    author: {
      name: 'Adi',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'team-1.jpg',
    },
  },
  {
    id: 2,
    title: 'Coral Conservation',
    href: '/blog/post2',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'life-2.jpeg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Adi',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'team-1.jpg',
    },
  },
  {
    id: 3,
    title: 'Total Nesting Patrol',
    href: '/blog/post3',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
    imageUrl:
      'life-5.jpeg',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Adi',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'team-1.jpg',
    },
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">From the blog</h2>
          <p className="mt-2 text-lg/8 text-gray-600">Learn more from our Blog</p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row">
                <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    alt=""
                    src={post.imageUrl}
                    className="absolute inset-0 size-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 text-sm/6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                      <div className="text-sm/6">
                        <p className="font-semibold text-gray-900">
                          <a href={post.author.href}>
                            <span className="absolute inset-0" />
                            {post.author.name}
                          </a>
                        </p>
                        <p className="text-gray-600">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

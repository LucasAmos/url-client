const blog = [
  {
    type: 'title',
    value: 'blog2'
  },
  {
    type: 'previous',
    value: {
      title: 'previous blog',
      route: 'previous blog route'
    }
  },
  {
    type: 'next',
    value: {
      title: 'next blog',
      route: 'next blog route'
    }
  },
  {
    type: 'text',
    value: `
# This is a header 2\n\n 
## This is a smaller header \n\n 
### This is an even smaller header \n\n
And this is a paragraph
This block of Markdown contains <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/HTML">HTML</a>
`
  },
  { type: 'code', value: `(num) => num + 1` }
];

export default blog;

const blog = [
  {
    type: 'text',
    value: `
# This is a header 1\n\n 
## This is a smaller header \n\n 
### This is an even smaller header \n\n
And this is a paragraph
This block of Markdown contains <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/HTML">HTML</a>
`
  },
  { type: 'code', value: `(num) => num + 1` }
];

export default blog;
